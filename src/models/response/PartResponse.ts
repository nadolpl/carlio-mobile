import type { PartCategoryKey } from "../enums/PartCategory.ts";
import type { PartSourceKey } from "../enums/PartSource.ts";
import type { PageableParams } from "../Pageable.ts";

export interface PartResponse {
  id: string;
  name: string;
  description: string | null;
  manufacturer: string | null;
  category: PartCategoryKey;
  source: PartSourceKey;
}

export interface PartSearchParams extends PageableParams {
  search?: string;
  category?: PartCategoryKey;
  source?: PartSourceKey;
}
