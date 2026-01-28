import {useState} from 'react'
import useCustomAccount, {TCustomAccount} from '@/hooks/useCustomAccount'
import useCustomMove, {TCustomMove} from '@/hooks/useCustomMove'
import useCustomMypage, {TCustomMypage} from '@/hooks/useCustomMypage'
import LoadingSpinner from '@/components/LoadingSpinner'

interface CourseUpdateFormProps {
  isGraduated: boolean
}

const CourseUpdateForm: React.FC<CourseUpdateFormProps> = ({isGraduated}) => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {reload, moveToPath}: TCustomMove = useCustomMove()
  const {getUsername}: TCustomAccount = useCustomAccount()
  const {uploadCourse}: TCustomMypage = useCustomMypage()
  const username = getUsername()

  const handleClick = () => {
    const loginParams = {username, password}
    if (password) {
      setIsLoading(true)
      uploadCourse(loginParams).then(success => {
        setIsLoading(false)
        if (success) {
          alert('기이수과목이 업데이트 되었습니다.')
          isGraduated ? reload() : moveToPath('/mypage/result')
        }
      })
    } else {
      alert('비밀번호를 입력해주세요.')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <>
      <div className="form-login" onKeyDown={handleKeyDown}>
        <div className="input-group flex-nowrap">
          <input
            className="form-control"
            type="text"
            value={username}
            style={{backgroundColor: 'rgb(248,249,250)'}}
            disabled
          />
        </div>
        <div className="input-group flex-nowrap" style={{marginTop: '1rem'}}>
          <input
            className="form-control"
            type={showPassword ? 'text' : 'password'}
            placeholder="샘물 비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span
            className="input-group-text"
            onClick={() => setShowPassword(!showPassword)}
            style={{cursor: 'pointer'}}>
            <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
          </span>
        </div>
      </div>
      <input
        type="submit"
        className="btn btn-primary button-sm"
        value="인증하기"
        onClick={handleClick}
      />
      {isLoading && <LoadingSpinner />}
    </>
  )
}

export default CourseUpdateForm
