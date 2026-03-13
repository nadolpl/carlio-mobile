export interface ScheduleSimpleResponse {
  id: string;
  vehicleId: string;
  name: string;
  active: boolean;
  intervalKilometers: number | null;
  intervalDays: number | null;
  lastPerformedDate: number[] | null;
  lastPerformedMileage: number | null;
  nextDueDate: number[] | null;
  nextDueMileage: number | null;
}
