import TermsComponent from './TermsComponent'
import useCustomAgree, {TCusotmAgree} from '../../hooks/useCustomAgree'

const TermsBox = () => {
  const {clickCheckBox}: TCusotmAgree = useCustomAgree()

  return (
    <div className="container" style={{width: 'auto'}}>
      <div className="info_title">
        <b>이용약관</b>
      </div>
      <div className="info_box_wrapper info_box_small">
        <div className="info_box_content">
          <TermsComponent />
        </div>
        <div className="info_agree">
          <label style={{cursor: 'pointer'}}>
            <input type="checkbox" onClick={clickCheckBox} id="agree" />
            <label htmlFor="agree"></label>
            다음 이용약관에 동의합니다.
          </label>
        </div>
      </div>
    </div>
  )
}

export default TermsBox
