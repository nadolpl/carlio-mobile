export const PartSource = {
  SYSTEM: "System",
  USER: "User",
} as const;

export type PartSourceKey = keyof typeof PartSource;
