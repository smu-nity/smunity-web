import React from 'react'
import {Domain} from '../../types/Culture'
import {Category} from '../../types/Course'
import MajorResult from './MajorResult'
import CultureBasicResult from './CultureBasicResult'
import CultureResult from './CultureResult'

interface ResultContainerProps {
  type: Category | Domain
}

const ResultContainer: React.FC<ResultContainerProps> = ({type}) => {
  return {
    ALL: null,
    MAJOR_ADVANCED: <MajorResult type={type} />,
    MAJOR_OPTIONAL: <MajorResult type={type} />,
    CULTURE: null,
    BASIC: <CultureBasicResult type={type} />,
    CORE: <CultureResult type={type} />,
    BALANCE: <CultureResult type={type} />
  }[type]
}

export default ResultContainer
