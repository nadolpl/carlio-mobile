import { VehicleResponse } from "models/response/VehicleResponse";
import { PartResponse } from "models/response/PartResponse";
import { MaintenanceResponse } from "models/response/MaintenanceResponse";
import { ExpenseResponse } from "models/response/ExpenseResponse";
import { ScheduleResponse } from "models/response/ScheduleResponse";

export type RootStackParamList = {
  MainTabs: undefined;
  Login: undefined;

  PartDetails: { partId: string };
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

  ScheduleDetails: { scheduleId: string };
  AddSchedule: undefined;
  EditSchedule: { schedule: ScheduleResponse };

  DocumentDetails: { documentId: string };
  AddDocument: undefined;

  Register: undefined;
};

export type BottomTabParamList = {
  VehicleList: undefined;
  MaintenanceList: undefined;
  PartList: undefined;
  ExpenseList: undefined;
  DocumentList: undefined;
  ScheduleList: undefined;
};
