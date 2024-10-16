type Role = 'ROLE_USER' | 'ROLE_ADMIN'

export interface Member {
  memberId?: number
  memberRole?: Role
  accessToken?: string
  refreshToken?: string
}
