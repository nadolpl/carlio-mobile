import { VehicleResponse } from "models/response/VehicleResponse";

export type RootStackParamList = {
  MainTabs: undefined;
  VehicleDetails: { vehicleId: string };
  AddVehicle: undefined;
  EditVehicle: { vehicle: VehicleResponse };
  Login: undefined;
};

export type DrawerParamList = {
  VehicleList: undefined;
  MaintenanceList: undefined;
  PartList: undefined;
};
