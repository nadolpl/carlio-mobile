export const ExpenseType = {
  FUEL: "Fuel",
  PARKING: "Parking",
  INSURANCE: "Insurance",
  INSPECTION: "Inspection",
  WASHING: "Washing",
  OTHER: "Other",
} as const;

export type ExpenseTypeKey = keyof typeof ExpenseType;
