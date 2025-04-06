import {useEffect, useState} from 'react'
import Modal from '../Modal'
import TargetTable from './TargetTable'
import useCustomAgree, {TCustomAgree} from '../../hooks/useCustomAgree'

const TermsComponent = () => {
  const {doFetchCurrentTerm}: TCustomAgree = useCustomAgree()
  const [term, setTerm] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    doFetchCurrentTerm().then((data: string) => {
      setTerm(data)
    })
  }, [])

  return (
    <>
      <div className="info_box">
        <div className="info_content">
          <p>1. 현재 검사 가능한 학과는 다음과 같습니다.</p>
          <p style={{marginLeft: '1rem', fontSize: '0.85rem'}}>
            - 검사대상: &nbsp;
            <a
              className="link_site"
              style={{cursor: 'pointer'}}
              onClick={() => setIsOpenModal(true)}>
              검사대상표
            </a>
          </p>
          <p>
            2. <b>2017학번부터</b> 검사가 가능합니다.
          </p>
          <p>
            3. 추천 과목 정보는 <b>{term}</b> 기준으로 제공됩니다.
          </p>
          <p>
            4. 검사 기준은 <b>{term}</b> 교육과정을 따릅니다.
          </p>
          <p style={{marginLeft: '1rem', fontSize: '0.85rem'}}>
            - 상명대학교 교육과정:
            <a
              className="link_site"
              target="_blank"
              href="https://www.smu.ac.kr/kor/life/curriculum.do"
              style={{marginLeft: '0.3rem'}}
              rel="noreferrer">
              전공
            </a>
            <a
              className="link_site"
              target="_blank"
              href="https://www.smu.ac.kr/smgs/curriculum/culture1.do"
              style={{marginLeft: '0.3rem'}}
              rel="noreferrer">
              교양
            </a>
          </p>
          <p>
            5. 사용자의 상명대학교 포털 사이트 비밀번호는 재학생 인증과 기이수과목
            업데이트에만 사용되며, <b>저장되지 않습니다.</b>
          </p>
          <p>
            6. 이 서비스는 상명대학교에서 공식적으로 운영하는 것이 아니므로,{' '}
            <b className="margin-l3">검사 결과의 정확성을 보장하지 않습니다.</b>
          </p>
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        icon="fa-check-circle"
        onClose={() => setIsOpenModal(false)}
        title={'검사대상표'}
        explanation={'아래 표에 해당하는 학과만 회원가입 가능합니다.'}
        children={<TargetTable />}
      />
    </>
  )
}

export default TermsComponent
