import {useState} from 'react'
import ResultCultureItem from '../../components/result/ResultCultureItem'
import ResultDetailItem from '../../components/result/ResultDetailItem'
import ResultItem from '../../components/result/ResultItem'
import {Category, Domain} from '../../types/Course'
import ModalContainer from '../../components/result/ModalContainer'
import ResultContainer from '../../components/result/ResultContainer'

const ResultPage = () => {
  const categorys: Category[] = ['ALL', 'MAJOR_ADVANCED', 'MAJOR_OPTIONAL', 'CULTURE']
  const domains: Domain[] = ['BASIC', 'CORE', 'BALANCE']
  const modals: (Category | Domain)[] = [
    'MAJOR_ADVANCED',
    'MAJOR_OPTIONAL',
    'BASIC',
    'CORE',
    'BALANCE'
  ]

  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <div className="lcontainer">
      <div className="rcontainer">
        <ResultItem />
      </div>
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
