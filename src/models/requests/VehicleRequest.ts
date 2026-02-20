import type { FuelTypeKey } from "../enums/FuelType.ts";

export interface VehicleRequest {
  name: string;
  brand: string;
  model: string;
  fuelType: FuelTypeKey;
  mileage: number;
  registrationNumber: string | null;
  productionYear: number | null;
  capacity: number | null;
  power: number | null;
  vin: string | null;
}
