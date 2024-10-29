import {useEffect, useState} from 'react'
import ResultCultureItem from '../../components/result/ResultCultureItem'
import ResultDetailItem from '../../components/result/ResultDetailItem'
import ResultItem from '../../components/result/ResultItem'
import {Category} from '../../types/Course'
import {Domain} from '../../types/Culture'
import ModalContainer from '../../components/modal/ModalContainer'

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

  const [isOpenModal, setIsOpenModal] = useState('')

  useEffect(() => {
    console.log(isOpenModal)
    console.log(modals[0] === isOpenModal)
  }, [isOpenModal])

  return (
    <div className="lcontainer">
      <div className="rcontainer">
        <ResultItem />
      </div>
      <div className="rcontainer">
        {categorys.map((category, index) => (
          <ResultDetailItem
            category={category}
            openModal={() => setIsOpenModal(category)}
            key={index}
          />
        ))}
        {domains.map((domain, index) => (
          <ResultCultureItem
            domain={domain}
            openModal={() => setIsOpenModal(domain)}
            key={index}
          />
        ))}
      </div>
      {modals.map((modal, index) => (
        <ModalContainer
          isOpen={modal === isOpenModal}
          onClose={() => setIsOpenModal('')}
          category={modal}
          children={<div>test</div>}
          key={index}
        />
      ))}
    </div>
  )
}

export default ResultPage
