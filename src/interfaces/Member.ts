export interface Member {
  email: string
  pw?: string
  nickname?: string
  social?: boolean
  roleNames?: [string]
  accessToken?: string
  refreshToken?: string
  error?: MemberError
}

export interface MemberError {
  error?: string
}

export type MemberModifyType = Omit<
  Member,
  'social' | 'roleNames' | 'accessToken' | 'refreshToken' | 'error'
>
