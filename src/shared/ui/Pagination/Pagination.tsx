import { memo } from 'react';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import { Icon } from '../Icon';
import styles from './Pagination.module.scss';
export interface PaginationItem {
  selected: number;
}
interface PaginationProps {
  className?: string;
  pageCount: number;
  onPageChange: (item: PaginationItem) => void;
  forcePage?: number;
}

export const Pagination = memo(
  ({ className, pageCount, onPageChange, forcePage }: PaginationProps) => {
    return (
      <ReactPaginate
        className={classNames(styles.component, className)}
        breakLabel='...'
        previousLabel={
          <Icon
            iconName={'icon-chevron-left'}
            fontSize='20px'
            color='dark_gray'
            className={classNames(styles.prev_icon, styles.icon)}
          />
        }
        nextLabel={
          <Icon
            iconName={'icon-chevron-right'}
            fontSize='20px'
            color='dark_gray'
            className={styles.next_icon}
          />
        }
        onPageChange={onPageChange}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        forcePage={forcePage}
        marginPagesDisplayed={1}
      />
    );
  },
);

Pagination.displayName = 'Pagination';
