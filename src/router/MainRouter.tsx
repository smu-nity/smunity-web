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
import TermsPage from '../pages/qna/TermsPage'
import PrivacyPage from '../pages/qna/PrivacyPage'
import QuestionPage from '../pages/qna/QuestionPage'
import QuestionDetailPage from '../pages/qna/QuestionDetailPage'

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
          <Route path="/qna" element={<Outlet />}>
            <Route path="terms" element={<TermsPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="questions" element={<QuestionPage />} />
            <Route path="questions/:id" element={<QuestionDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
