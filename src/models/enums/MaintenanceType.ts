export const MaintenanceType = {
  REPLACEMENT: "Replacement",
  REPAIR: "Repair",
  UPGRADE: "Upgrade",
  SEASONAL: "Seasonal",
  OTHER: "Other",
} as const;

export type MaintenanceTypeKey = keyof typeof MaintenanceType;
