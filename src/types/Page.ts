interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

interface Pageable {
  sort: Sort
  pageNumber: number
  pageSize: number
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface Page<T> {
  content: [T]
  pageable: Pageable
  sort: Sort
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  number: number
  numberOfElements: number
  first: boolean
  empty: boolean
}
