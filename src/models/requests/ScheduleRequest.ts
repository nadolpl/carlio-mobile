export interface ScheduleRequest {
  vehicleId: string;
  name: string;
  intervalKilometers: number | null;
  intervalDays: number | null;
  lastPerformedDate: string | null;
  lastPerformedMileage: number | null;
}
