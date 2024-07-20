import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Layout from './Layout'
import MainPage from '../pages/MainPage'

const MainRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
