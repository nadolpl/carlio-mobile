import type { FuelTypeKey } from "../enums/FuelType.ts";
import type { PageableParams } from "../Pageable.ts";

export interface VehicleListedResponse {
  id: string;
  name: string;
  brand: string;
  model: string;
  mileage: number;
  fuelType: FuelTypeKey;
  registrationNumber: string | null;
  productionYear: number | null;
}

export interface VehicleSearchParams extends PageableParams {}
