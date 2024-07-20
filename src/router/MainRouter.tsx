import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'

import Layout from './Layout'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/accounts/LoginPage'

const MainRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/accounts" element={<Outlet />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
