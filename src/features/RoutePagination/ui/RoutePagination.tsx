import { memo } from 'react';
import { Pagination, PaginationItem } from '@shared/ui/Pagination';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import {
  getLimit,
  getOffset,
  getTotalCount,
  setRouteFilters,
} from '@entities/routes';

interface RoutePaginationProps {
  className?: string;
}

export const RoutePagination = memo(({ className }: RoutePaginationProps) => {
  const dispatch = useAppDispatch();

  const limit = useAppSelector(getLimit);
  const totalCount = useAppSelector(getTotalCount);
  const offset = useAppSelector(getOffset);
  
  const pageCount = Math.ceil(totalCount / limit);
  const forcePage = (offset || 0) / limit;

  const handleChange = ({ selected }: PaginationItem) => {
    dispatch(setRouteFilters({ offset: selected * limit }));
  };

  return (
    <Pagination
      className={className}
      pageCount={pageCount}
      onPageChange={handleChange}
      forcePage={pageCount ? forcePage : undefined}
    />
  );
});

RoutePagination.displayName = 'RoutePagination';
