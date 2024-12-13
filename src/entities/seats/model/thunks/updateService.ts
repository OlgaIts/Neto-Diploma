import { AppDispatch, RootState } from '@app/providers/StoreProvider/store';
import { type Direction } from '@shared/types';
import { updateServiceState } from '../slice/currentDirectionInfo';
import { saveServicesPrice } from '../slice/ticketInfoSlice';
import { type Options } from '../types/serviceOptions';

interface SetService {
  service: string;
  direction: Direction;
}

export const updateService =
  ({ direction, service }: SetService) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const currentInfo = getState().currentWagonInfo[direction];
    const currentService = currentInfo?.services?.[service];

    if (!currentService || !['wi-fi', 'linens'].includes(service)) {
      return;
    }

    const wagonNumber = currentInfo.wagonNumber;
    const wagonId = currentInfo.wagonId;
    const wagonClass = currentInfo.wagonClass;
    const price = currentService.price;

    if (!price || !wagonNumber || !wagonId) {
      return;
    }

    const booleanActive = !currentService.active;
    const updatedService: Options = {
      ...currentService,
      active: booleanActive,
    };

    dispatch(
      updateServiceState({ direction, data: { [service]: updatedService } }),
    );

    dispatch(
      saveServicesPrice({
        direction,
        data: {
          [service]: booleanActive ? currentService.price : 0,
          wagonNumber,
          wagonId,
          wagonClass,
        },
      }),
    );
  };
