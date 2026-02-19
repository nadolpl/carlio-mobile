export const FuelType = {
  PETROL: "Petrol",
  DIESEL: "Diesel",
  PETROL_LPG: "Petrol + LPG",
} as const;

export type FuelTypeKey = keyof typeof FuelType;
