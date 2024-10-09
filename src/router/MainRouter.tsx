import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom'

import Layout from './Layout'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/accounts/LoginPage'
import AgreePage from '../pages/accounts/AgreePage'
import RegisterPage from '../pages/accounts/RegisterPage'
import MyPage from '../pages/mypage/MyPage'
import ResultPage from '../pages/mypage/ResultPage'
import useCustomAccount, {TCustomAccount} from '../hooks/useCustomAccount'
import {ReactNode} from 'react'

const ProtectedRoute = ({children}: {children: ReactNode}): JSX.Element => {
  const {isLogin}: TCustomAccount = useCustomAccount()
  return isLogin() ? <>{children}</> : <Navigate to="/accounts/login" />
}

const MainRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/accounts" element={<Outlet />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="agree" element={<AgreePage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route
            path="/mypage"
            element={
              <ProtectedRoute>
                <Outlet />
              </ProtectedRoute>
            }>
            <Route index element={<MyPage />} />
            <Route path="result" element={<ResultPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
