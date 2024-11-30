import {TLoginParam} from '../api/accountApi'
import {courseUpload} from '../api/courseApi'

export interface TCustomMypage {
  uploadCourse: (loginParam: TLoginParam) => Promise<boolean>
}

const useCustomMypage = (): TCustomMypage => {
  const uploadCourse = async (loginParam: TLoginParam) => {
    const response = await courseUpload(loginParam)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  return {uploadCourse}
}

export default useCustomMypage
