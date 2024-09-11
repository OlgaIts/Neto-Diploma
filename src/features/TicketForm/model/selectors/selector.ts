import { RootState } from '@app/providers/StoreProvider/store';

export const getTicketFormData = (state: RootState) => state.ticketForm;
