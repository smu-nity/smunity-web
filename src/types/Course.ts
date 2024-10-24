export interface Course {
  id: number
  year: string
  semester: string
  number: string
  name: string
  type: string
  domain: string
  category: string
  subDomain: string
  credit: number
}

export type Category = 'ALL' | 'MAJOR_ADVANCED' | 'MAJOR_OPTIONAL' | 'CULTURE'
