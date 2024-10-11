import React from 'react'
import {Page} from '../../types/Page'
import {Question} from '../../types/Question'

interface PaginationProps {
  page: Page<Question>
}

const Pagination: React.FC<PaginationProps> = ({page}) => {
  const {totalPages} = page
  return (
    <ul className="pagination justify-content-center" style={{marginBottom: '60px'}}>
      {page.first ? (
        <li className="page-item disabled">
          <a className="page-link">이전</a>
        </li>
      ) : (
        <li className="page-item">
          <a className="page-link">이전</a>
        </li>
      )}

      {page.last ? (
        <li className="page-item disabled">
          <a className="page-link">다음</a>
        </li>
      ) : (
        <li className="page-item">
          <a className="page-link">다음</a>
        </li>
      )}
    </ul>
  )
}

export default Pagination
