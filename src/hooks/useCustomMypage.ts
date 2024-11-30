import {TLoginParam} from '../api/accountApi'
import {courseUpload} from '../api/courseApi'
import {updateMember} from '../api/memberApi'

export interface TCustomMypage {
  uploadCourse: (loginParam: TLoginParam) => Promise<boolean>
  memberUpdate: (loginParam: TLoginParam) => Promise<boolean>
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

  return {uploadCourse, memberUpdate}
}

export default useCustomMypage
