import { memo } from 'react';
//TODO: рефактор архитектуры
import { RoundTripTime } from '@widgets/RoutesFilters';
import { DirectionFilterHeader } from '@shared/ui/DirectionFilterHeader';
import { timeFiltersQueryParams } from '../consts/timeFiltersQueryParams';

interface RouteTimeFilterProps {
  className?: string;
  type: keyof typeof timeFiltersQueryParams;
  title: string;
  iconName: string;
}

export const RouteTimeFilter = memo(
  ({ className, type, title, iconName }: RouteTimeFilterProps) => {
    return (
      <DirectionFilterHeader
        title={title}
        iconName={iconName}
        className={className}
      >
        <RoundTripTime routeDirection={timeFiltersQueryParams[type]} />
      </DirectionFilterHeader>
    );
  },
);
RouteTimeFilter.displayName = 'RouteTimeFilter';
