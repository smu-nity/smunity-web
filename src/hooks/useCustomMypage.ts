import {TLoginParam} from '@/api/accountApi'
import {courseUpload} from '@/api/courseApi'
import {
  changeDepartment,
  changeExemption,
  changePassword,
  deleteMember,
  TDepartmentParam,
  TExemptionParam,
  TPasswordParam,
  updateMember
} from '@/api/memberApi'
import {AxiosError} from 'axios'

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
    try {
      await changePassword(passwordParam)
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
  }

  const departmentChange = async (departmentParam: TDepartmentParam) => {
    try {
      await changeDepartment(departmentParam)
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
  }

  const exemptionChange = async (exemptionParam: TExemptionParam) => {
    try {
      await changeExemption(exemptionParam)
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
  }

  const memberDelete = async () => {
    try {
      await deleteMember()
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
  }

  const alertError = (data: {message: string; detail?: Record<string, string>}) =>
    alert(
      data.detail
        ? `${data.message}\n${Object.values(data.detail).join('\n')}`
        : data.message
    )

  const authError = (err: unknown) => {
    const error = err as AxiosError<{message: string}>
    alert(error.response?.data?.message || '알 수 없는 오류가 발생했습니다.')
  }

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
