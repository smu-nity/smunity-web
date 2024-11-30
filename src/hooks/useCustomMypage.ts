import {TLoginParam} from '../api/accountApi'
import {courseUpload} from '../api/courseApi'
import {changePassword, TPasswordParam, updateMember} from '../api/memberApi'

export interface TCustomMypage {
  uploadCourse: (loginParam: TLoginParam) => Promise<boolean>
  memberUpdate: (loginParam: TLoginParam) => Promise<boolean>
  passwordChange: (passwordParam: TPasswordParam) => Promise<boolean>
}

const useCustomMypage = (): TCustomMypage => {
  const uploadCourse = async (loginParam: TLoginParam) => {
    const response = await courseUpload(loginParam)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  const memberUpdate = async (loginParam: TLoginParam) => {
    const response = await updateMember(loginParam)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  const passwordChange = async (passwordParam: TPasswordParam) => {
    const response = await changePassword(passwordParam)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  return {uploadCourse, memberUpdate, passwordChange}
}

export default useCustomMypage
