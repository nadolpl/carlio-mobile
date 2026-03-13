import { z } from "zod";
import { numOrNull, strOrNull } from "utils/validation";

export const scheduleSchema = z
  .object({
    vehicleId: z.uuid({ error: "Vehicle is required" }),
    name: z
      .string()
      .min(1, "Name is required")
      .max(100, "Name cannot be longer than 100 characters"),
    intervalKilometers: numOrNull.pipe(
      z
        .number({ error: "Interval (km) must be a number" })
        .min(100, "Interval must be at least 100 km")
        .max(1_000_000, "Interval is too large")
        .nullable(),
    ),
    intervalDays: numOrNull.pipe(
      z
        .number({ error: "Interval (days) must be a number" })
        .min(1, "Interval must be at least 1 day")
        .max(3650, "Interval is too large")
        .nullable(),
    ),
    lastPerformedDate: strOrNull.pipe(
      z.string({ error: "Last performed date is required" }).nullable(),
    ),
    lastPerformedMileage: numOrNull.pipe(
      z
        .number({ error: "Mileage must be a number" })
        .min(1, "Mileage must be a positive number")
        .max(9_999_999, "Mileage is too large")
        .nullable(),
    ),
  })
  .refine((data) => data.intervalKilometers !== null || data.intervalDays !== null, {
    message: "At least one of the intervals is required",
    path: ["intervalKilometers"],
  });

export type ScheduleFormInput = z.input<typeof scheduleSchema>;
export type ScheduleFormOutput = z.output<typeof scheduleSchema>;
