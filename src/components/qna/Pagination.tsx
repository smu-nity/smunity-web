import {useNavigate} from 'react-router-dom'
import {Page} from '../../types/Page'
import {Question} from '../../types/Question'

interface PaginationProps {
  page: Page<Question>
}

const Pagination: React.FC<PaginationProps> = ({page}) => {
  const {totalPages, number} = page
  const navigate = useNavigate()

  const onPageChange = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      navigate(`?page=${pageNumber + 1}`)
    }
  }

  const handlePrevious = () => {
    if (!page.first) {
      onPageChange(number - 1)
    }
  }

  const handleNext = () => {
    if (!page.last) {
      onPageChange(number + 1)
    }
  }

  return (
    <ul className="pagination justify-content-center" style={{marginBottom: '60px'}}>
      <li className={`page-item ${page.first ? 'disabled' : ''}`}>
        <a className="page-link" onClick={handlePrevious}>
          이전
        </a>
      </li>

      {Array.from({length: totalPages}, (_, idx) => (
        <li key={idx} className={`page-item ${number === idx ? 'active' : ''}`}>
          <a className="page-link" onClick={() => onPageChange(idx)}>
            {idx + 1}
          </a>
        </li>
      ))}

      <li className={`page-item ${page.last ? 'disabled' : ''}`}>
        <a className="page-link" onClick={handleNext}>
          다음
        </a>
      </li>
    </ul>
  )
}

export default Pagination
