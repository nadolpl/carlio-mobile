import type { PageableParams } from "../Pageable.ts";

export interface ScheduleResponse {
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
  isOverdue: boolean;
  daysLeft: number | null;
  kilometersLeft: number | null;
  progressPercentage: number;
}

export interface ScheduleSearchParams extends PageableParams {
  vehicleId?: string;
  active?: boolean;
  name?: string;
}
