import {useNavigate} from 'react-router-dom'

export interface TCustomMove {
  moveToPath: (path: string) => void
}

const useCustomMove = (): TCustomMove => {
  const navigate = useNavigate()

  //----------------페이지 이동
  const moveToPath = (path: string) => {
    navigate({pathname: path}, {replace: true})
  }

  return {moveToPath}
}

export default useCustomMove
