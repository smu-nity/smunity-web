type Role = 'ROLE_USER' | 'ROLE_ADMIN'

export interface Member {
  username?: string
  memberRole?: Role
  accessToken?: string
  refreshToken?: string
}
