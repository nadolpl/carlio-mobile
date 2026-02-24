import { VehicleResponse } from "models/response/VehicleResponse";
import { PartResponse } from "models/response/PartResponse";
import { MaintenanceResponse } from "models/response/MaintenanceResponse";
import { ExpenseResponse } from "models/response/ExpenseResponse";

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

  ExpenseDetails: { expenseId: string };
  AddExpense: undefined;
  EditExpense: { expense: ExpenseResponse };

  DocumentDetails: { documentId: string };
  AddDocument: undefined;
};

export type DrawerParamList = {
  VehicleList: undefined;
  MaintenanceList: undefined;
  PartList: undefined;
  ExpenseList: undefined;
  DocumentList: undefined;
};
