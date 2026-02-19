import { FuelTypeKey } from "models/enums/FuelType";

export interface VehicleResponse {
  id: string;
  name: string;
  brand: string;
  model: string;
  mileage: number;
  fuelType: FuelTypeKey;
  vin: string | null;
  registrationNumber: string | null;
  productionYear: number | null;
  capacity: number | null;
  power: number | null;
  photoId: string | null;
}
