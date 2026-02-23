import { VehicleResponse } from "models/response/VehicleResponse";
import { PartResponse } from "models/response/PartResponse";
import { MaintenanceResponse } from "models/response/MaintenanceResponse";

export type RootStackParamList = {
  MainTabs: undefined;
  Login: undefined;

  PartDetails: { part: PartResponse };
  EditPart: { part: PartResponse };
  AddPart: undefined;

  MaintenanceDetails: { maintenanceId: string };
  AddMaintenance: undefined;
  EditMaintenance: { maintenance: MaintenanceResponse };

  VehicleDetails: { vehicleId: string };
  AddVehicle: undefined;
  EditVehicle: { vehicle: VehicleResponse };
};

export type DrawerParamList = {
  VehicleList: undefined;
  MaintenanceList: undefined;
  PartList: undefined;
};
