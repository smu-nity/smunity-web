import {useEffect, useState} from 'react'
import ResultCultureItem from '@/components/result/ResultCultureItem'
import ResultDetailItem from '@/components/result/ResultDetailItem'
import ResultItem from '@/components/result/ResultItem'
import {Category, Domain} from '@/types/Course'
import ModalContainer from '@/components/result/ModalContainer'
import ResultContainer from '@/components/result/ResultContainer'
import {Credit} from '@/types/Credit'
import {fetchCredit} from '@/api/courseApi'

const ResultPage = () => {
  const [credit, setCredit] = useState<Credit>()
  const categorys: Category[] = !credit?.isDoubleMajor
    ? ['ALL', 'MAJOR_ADVANCED', 'MAJOR_OPTIONAL', 'CULTURE']
    : ['ALL', 'FIRST_MAJOR', 'SECOND_MAJOR', 'CULTURE']
  const modals: (Category | Domain)[] = !credit?.isDoubleMajor
    ? ['MAJOR_ADVANCED', 'MAJOR_OPTIONAL', 'BASIC', 'CORE', 'BALANCE']
    : ['FIRST_MAJOR', 'SECOND_MAJOR', 'BASIC', 'CORE', 'BALANCE']
  const domains: Domain[] = ['BASIC', 'CORE', 'BALANCE']
  const [activeModal, setActiveModal] = useState<string | null>(null)

  useEffect(() => {
    fetchCredit().then((data: Credit) => {
      setCredit(data)
    })
  }, [])

  return (
    <div className="lcontainer">
      <div className="rcontainer">{credit && <ResultItem credit={credit} />}</div>
      <div className="rcontainer">
        {categorys.map((category, index) => (
          <ResultDetailItem
            category={category}
            openModal={() => setActiveModal(category)}
            key={index}
          />
        ))}
        {domains.map((domain, index) => (
          <ResultCultureItem
            domain={domain}
            openModal={() => setActiveModal(domain)}
            key={index}
          />
        ))}
      </div>
      {modals.map((modal, index) => (
        <ModalContainer
          isOpen={modal === activeModal}
          onClose={() => setActiveModal(null)}
          type={modal}
          children={<ResultContainer type={modal} />}
          key={index}
        />
      ))}
    </div>
  )
}

export default ResultPage
