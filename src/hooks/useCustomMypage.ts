import {TLoginParam} from '../api/accountApi'
import {courseUpload} from '../api/courseApi'
import {
  changeDepartment,
  changeExemption,
  changePassword,
  deleteMember,
  TDepartmentParam,
  TExemptionParam,
  TPasswordParam,
  updateMember
} from '../api/memberApi'

export interface TCustomMypage {
  uploadCourse: (loginParam: TLoginParam) => Promise<boolean>
  memberUpdate: (loginParam: TLoginParam) => Promise<boolean>
  passwordChange: (passwordParam: TPasswordParam) => Promise<boolean>
  departmentChange: (departmentParam: TDepartmentParam) => Promise<boolean>
  exemptionChange: (exemptionParam: TExemptionParam) => Promise<boolean>
  memberDelete: () => Promise<boolean>
}

const useCustomMypage = (): TCustomMypage => {
  const uploadCourse = async (loginParam: TLoginParam) => {
    try {
      await courseUpload(loginParam)
      return true
    } catch (err) {
      authError(err)
      return false
    }
  }

  const memberUpdate = async (loginParam: TLoginParam) => {
    try {
      await updateMember(loginParam)
      return true
    } catch (err) {
      authError(err)
      return false
    }
  }

  const passwordChange = async (passwordParam: TPasswordParam) => {
    const response = await changePassword(passwordParam)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }

  const departmentChange = async (departmentParam: TDepartmentParam) => {
    const response = await changeDepartment(departmentParam)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }

  const exemptionChange = async (exemptionParam: TExemptionParam) => {
    const response = await changeExemption(exemptionParam)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }

  const memberDelete = async () => {
    const response = await deleteMember()
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }

  const alertError = (data: any) =>
    alert(
      data.detail
        ? `${data.message}\n${Object.values(data.detail).join('\n')}`
        : data.message
    )

  const authError = (err: any) =>
    alert(err.response?.data?.message || '알 수 없는 오류가 발생했습니다.')

  return {
    uploadCourse,
    memberUpdate,
    passwordChange,
    departmentChange,
    exemptionChange,
    memberDelete
  }
}

export default useCustomMypage
