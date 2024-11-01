export interface SpecificPlace {
  available: boolean;
  placement: 'bottom' | 'top' | 'side' | null;
  active?: boolean;
}
