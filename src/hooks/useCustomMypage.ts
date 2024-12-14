import {TLoginParam} from '../api/accountApi'
import {courseUpload} from '../api/courseApi'
import {
  changeDepartment,
  changePassword,
  deleteMember,
  TDepartmentParam,
  TPasswordParam,
  updateMember
} from '../api/memberApi'

export interface TCustomMypage {
  uploadCourse: (loginParam: TLoginParam) => Promise<boolean>
  memberUpdate: (loginParam: TLoginParam) => Promise<boolean>
  passwordChange: (passwordParam: TPasswordParam) => Promise<boolean>
  departmentChange: (departmentParam: TDepartmentParam) => Promise<boolean>
  memberDelete: () => Promise<boolean>
}

const useCustomMypage = (): TCustomMypage => {
  const uploadCourse = async (loginParam: TLoginParam) => {
    const response = await courseUpload(loginParam)
    const success = response.status < 400
    !success && alert('샘물 포털 아이디 및 비밀번호가 일치하지 않습니다.')
    return success
  }

  const memberUpdate = async (loginParam: TLoginParam) => {
    const response = await updateMember(loginParam)
    const success = response.status < 400
    !success && alert('샘물 포털 아이디 및 비밀번호가 일치하지 않습니다.')
    return success
  }

  const passwordChange = async (passwordParam: TPasswordParam) => {
    const response = await changePassword(passwordParam)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  const departmentChange = async (departmentParam: TDepartmentParam) => {
    const response = await changeDepartment(departmentParam)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  const memberDelete = async () => {
    const response = await deleteMember()
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  return {uploadCourse, memberUpdate, passwordChange, departmentChange, memberDelete}
}

export default useCustomMypage
