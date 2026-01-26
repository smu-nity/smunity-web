import {ExemptionType} from '@/types/Exemption'

export interface MemberInfo {
  username: string
  name: string
  department: string
  deptCode: string
  deptEditable: boolean
  secondDepartment?: string
  secondDeptCode?: string
  yearId: number
  exemption: ExemptionType
}
