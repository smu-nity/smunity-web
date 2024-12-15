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
import QuestionCreatePage from '../pages/qna/QuestionCreatePage'
import QuestionModifyPage from '../pages/qna/QuestionModifyPage'
import AnswerCreatePage from '../pages/qna/AnswerCreatePage'
import AnswerModifyPage from '../pages/qna/AnswerModifyPage'
import PasswordResetPage from '../pages/account/PasswordResetPage'

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
            <Route path="password/reset" element={<PasswordResetPage />} />
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
            <Route
              element={
                <ProtectedRoute requireLogin={true}>
                  <Outlet />
                </ProtectedRoute>
              }>
              <Route path="questions/create" element={<QuestionCreatePage />} />
              <Route path="questions/:id/modify" element={<QuestionModifyPage />} />
              <Route path="questions/:id/answer" element={<AnswerCreatePage />} />
              <Route path="questions/:id/answer/modify" element={<AnswerModifyPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
