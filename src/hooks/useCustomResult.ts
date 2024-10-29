import {Domain} from '../types/Culture'
import {Category} from '../types/Course'
import {Content, Detail} from '../types/Modal'

export interface TCustomResult {
  getDetail: (category: Category | Domain) => Detail
  getContent: (category: Category | Domain) => Content
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

const contents = {
  ALL: {title: '', explanation: ''},
  MAJOR_ADVANCED: {
    title: '전공심화 추천과목',
    explanation: '전공심화 과목 중 미이수과목을 학년 순으로 추천합니다.'
  },
  MAJOR_OPTIONAL: {
    title: ' 전공선택 추천과목',
    explanation: '전공선택 과목 중 미이수과목을 학년 순으로 추천합니다.'
  },
  CULTURE: {title: '', explanation: ''},
  BASIC: {
    title: '기초교양 과목 목록',
    explanation: '기초교양 과목을 모두 이수해야 졸업요건을 충족합니다.'
  },
  CORE: {
    title: '상명핵심역량교양 영역 현황',
    explanation: '상명핵심역량교양 중 영역 2개 이상 이수해야 졸업요건을 충족합니다.'
  },
  BALANCE: {
    title: '균형교양 영역 현황',
    explanation: '균형교양 중 영역 3개 이상 이수해야 졸업요건을 충족합니다.'
  }
}

const useCustomResult = (): TCustomResult => {
  const getDetail = (category: Category | Domain) => {
    return details[category]
  }

  const getContent = (category: Category | Domain) => {
    return contents[category]
  }

  return {
    getDetail,
    getContent
  }
}

export default useCustomResult
