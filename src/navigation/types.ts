import { VehicleResponse } from "models/response/VehicleResponse";
import { PartResponse } from "models/response/PartResponse";

export type RootStackParamList = {
  MainTabs: undefined;
  VehicleDetails: { vehicleId: string };
  PartDetails: { part: PartResponse };
  EditPart: { part: PartResponse };
  AddVehicle: undefined;
  AddPart: undefined;
  EditVehicle: { vehicle: VehicleResponse };
  Login: undefined;
};

export type DrawerParamList = {
  VehicleList: undefined;
  MaintenanceList: undefined;
  PartList: undefined;
};
