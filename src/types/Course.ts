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

export interface CourseCulture {
  subDomain: string
  subDomainName: string
  completed: boolean
}

export type CourseCategory =
  | 'FIRST_MAJOR'
  | 'SECOND_MAJOR'
  | 'MAJOR_ADVANCED'
  | 'MAJOR_OPTIONAL'
  | 'CULTURE'

export type Category = Exclude<CourseCategory, 'MAJOR_OPTIONAL'> | 'ALL' | 'MAJOR'

export type Domain = 'BASIC' | 'CORE' | 'BALANCE'
