export interface Exemption {
  name: string
  exeption?: ExemptionType
}

export type ExemptionType = 'FOREIGN' | 'DISABLED' | 'TRANSFER'
