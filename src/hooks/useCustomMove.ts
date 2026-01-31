import {useNavigate} from 'react-router-dom'
import {useCallback} from 'react'

export interface TCustomMove {
  moveToPath: (path: string) => void
  reload: () => void
}

const useCustomMove = (): TCustomMove => {
  const navigate = useNavigate()

  //----------------페이지 이동
  const moveToPath = useCallback(
    (path: string) => {
      navigate({pathname: path}, {replace: true})
    },
    [navigate]
  )

  const reload = useCallback(() => {
    navigate(0)
  }, [navigate])

  return {moveToPath, reload}
}

export default useCustomMove
