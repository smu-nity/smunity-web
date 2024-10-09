import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/account/LoginPage'
import AgreePage from '../pages/account/AgreePage'
import RegisterPage from '../pages/account/RegisterPage'
import MyPage from '../pages/mypage/MyPage'
import ResultPage from '../pages/result/ResultPage'
import useCustomAccount, {TCustomAccount} from '../hooks/useCustomAccount'
import {ReactNode} from 'react'

const ProtectedRoute = ({
  children,
  requireLogin
}: {
  children: ReactNode
  requireLogin: boolean
}): JSX.Element => {
  const {isLogin}: TCustomAccount = useCustomAccount()
  const shouldNavigate = requireLogin ? !isLogin() : isLogin()

  return shouldNavigate ? (
    <Navigate to={requireLogin ? '/accounts/login' : '/mypage'} />
  ) : (
    <>{children}</>
  )
}

const MainRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="/accounts"
            element={
              <ProtectedRoute requireLogin={false}>
                <Outlet />
              </ProtectedRoute>
            }>
            <Route path="login" element={<LoginPage />} />
            <Route path="agree" element={<AgreePage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route
            path="/mypage"
            element={
              <ProtectedRoute requireLogin={true}>
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
