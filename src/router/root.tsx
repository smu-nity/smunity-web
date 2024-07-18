import {ComponentType, lazy, ReactNode, Suspense} from 'react'
import {createBrowserRouter} from 'react-router-dom'

const Loading: ReactNode = <div>Loading,,,,</div>

const Main: ComponentType = lazy(() => import('../pages/MainPage'))

const root = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    )
  }
])

export default root
