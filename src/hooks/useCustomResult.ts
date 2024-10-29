import {Domain} from '../types/Culture'
import {Category, Detail} from '../types/Course'

export interface TCustomResult {
  getDetail: (category: Category | Domain) => Detail
}

const details = {
  ALL: {text: '이수학점', icon: 'fa-user'},
  MAJOR_ADVANCED: {text: '전공심화', icon: 'fa-pen'},
  MAJOR_OPTIONAL: {text: '전공선택', icon: 'fa-pen-to-square'},
  CULTURE: {text: '교양', icon: 'fa-book'},
  BASIC: {text: '기초교양', icon: 'fa-book-open-reader'},
  CORE: {text: '상명핵심역량교양', icon: 'fa-book-open'},
  BALANCE: {text: '균형교양', icon: 'fa-book-journal-whills'}
}

const useCustomResult = (): TCustomResult => {
  const getDetail = (category: Category | Domain) => {
    return details[category]
  }

  return {
    getDetail
  }
}

export default useCustomResult
