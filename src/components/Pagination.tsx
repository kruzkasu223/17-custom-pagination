import type { Meta } from "../types"

type PaginationProps = {
  page: number
  meta: Meta | undefined
  onPageChange: (page: number) => void
}

export const Pagination = ({ page, meta, onPageChange }: PaginationProps) => {
  const onNext = () => {
    if (meta?.next_page) {
      onPageChange(page + 1)
    }
  }

  const onPrevious = () => {
    if (meta?.current_page !== 1) {
      onPageChange(page - 1)
    }
  }

  return (
    <div className="btn-group">
      <button
        className="btn-outline btn"
        disabled={meta?.current_page === 1}
        onClick={onPrevious}
      >
        «
      </button>

      {meta?.current_page && (
        <>
          {meta?.current_page > 2 && (
            <button className="btn-outline btn" onClick={() => onPageChange(1)}>
              1
            </button>
          )}

          {meta?.current_page > 3 && (
            <button className="btn-outline btn" disabled>
              ...
            </button>
          )}

          {meta?.current_page > 1 && (
            <button
              className="btn-outline btn"
              onClick={() => onPageChange(meta?.current_page - 1)}
            >
              {meta?.current_page - 1}
            </button>
          )}

          <button className="btn-outline btn btn-active" disabled>
            {meta?.current_page}
          </button>

          {meta?.current_page < meta?.total_pages && (
            <button
              className="btn-outline btn"
              onClick={() => onPageChange(meta?.current_page + 1)}
            >
              {meta?.current_page + 1}
            </button>
          )}

          {meta?.current_page < meta?.total_pages - 2 && (
            <button className="btn-outline btn" disabled>
              ...
            </button>
          )}

          {meta?.current_page < meta?.total_pages - 1 && (
            <button
              className="btn-outline btn"
              onClick={() => onPageChange(meta?.total_pages)}
            >
              {meta?.total_pages}
            </button>
          )}
        </>
      )}

      <button
        className="btn-outline btn"
        disabled={!meta?.next_page}
        onClick={onNext}
      >
        »
      </button>
    </div>
  )
}
