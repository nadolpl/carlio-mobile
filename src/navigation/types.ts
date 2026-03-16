import { VehicleResponse } from "models/response/VehicleResponse";
import { PartResponse } from "models/response/PartResponse";
import { MaintenanceResponse } from "models/response/MaintenanceResponse";
import { ExpenseResponse } from "models/response/ExpenseResponse";
import { ScheduleResponse } from "models/response/ScheduleResponse";

export type RootStackParamList = {
  BottomTabs: undefined;
  Login: undefined;
  Register: undefined;

  PartList: undefined;
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

  DocumentList: undefined;
  DocumentDetails: { documentId: string };
  AddDocument: undefined;

  NotificationList: undefined;
};

export type BottomTabParamList = {
  VehicleList: undefined;
  MaintenanceList: undefined;
  ExpenseList: undefined;
  ScheduleList: undefined;
  MoreMenu: undefined;
};
