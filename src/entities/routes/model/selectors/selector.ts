import { RootState } from '@app/providers/StoreProvider/store';

export const getRoutesData = (state: RootState) => state.routes.routes;

export const getTotalCount = (state: RootState) => state.routes.totalCount;
