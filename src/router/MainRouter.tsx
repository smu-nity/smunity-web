import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'

import Layout from './Layout'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/accounts/LoginPage'
import AgreePage from '../pages/accounts/AgreePage'

const MainRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/accounts" element={<Outlet />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="agree" element={<AgreePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
