import { memo } from 'react';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import { Icon } from '../Icon';
import styles from './Pagination.module.scss';

interface PaginationProps {
  className?: string;
}
export const Pagination = memo(({ className }: PaginationProps) => {
  // TODO: дописать
  return (
    <ReactPaginate
      className={classNames(styles.component, className)}
      breakLabel="..."
      previousLabel={
        <Icon
          iconName={'icon-chevron-left'}
          fontSize="20px"
          color="dark_gray"
          className={classNames(styles.prev_icon, styles.icon)}
        />
      }
      nextLabel={
        <Icon
          iconName={'icon-chevron-right'}
          fontSize="20px"
          color="dark_gray"
          className={styles.next_icon}
        />
      }
      onPageChange={() => console.log('work')}
      pageRangeDisplayed={1}
      pageCount={4}
      renderOnZeroPageCount={null}
    />
  );
});
Pagination.displayName = 'Pagination';
