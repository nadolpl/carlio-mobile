export const PartCategory = {
  ENGINE: "Engine",
  TRANSMISSION: "Transmission",
  BRAKES: "Brakes",
  SUSPENSION: "Suspension",
  ELECTRICAL: "Electrical System",
  COOLING_SYSTEM: "Cooling System",
  EXHAUST_SYSTEM: "Exhaust System",
  FUEL_SYSTEM: "Fuel System",
  TIRES: "Tires",
  FILTERS: "Filters",
  FLUIDS: "Fluids",
  LIGHTS: "Lighting",
  BODY: "Body",
  INTERIOR: "Interior",
  OTHER: "Other",
} as const;

export type PartCategoryKey = keyof typeof PartCategory;
