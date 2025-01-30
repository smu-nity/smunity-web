import {ExemptionType} from './Exemption'

export interface MemberInfo {
  username: string
  name: string
  department: string
  deptCode: string
  deptEditable: boolean
  exemption: ExemptionType
}
