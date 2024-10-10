import {useParams} from 'react-router-dom'
import Header from '../../components/Header'

const QuestionDetailPage = () => {
  const {id} = useParams<{id: string}>()
  console.log(id)

  return (
    <>
      <Header
        title="Q&A 게시판"
        subtitle="상명대 졸업요건 검사 사이트"
        content="Q&A 게시판입니다."
      />
    </>
  )
}

export default QuestionDetailPage
