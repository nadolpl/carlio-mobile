import type { PartCategoryKey } from "../enums/PartCategory.ts";

export interface PartRequest {
  name: string;
  category: PartCategoryKey;
  manufacturer: string | null;
  description: string | null;
}
