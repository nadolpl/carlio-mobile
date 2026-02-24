import { DocumentTypeKey } from "models/enums/DocumentType";
import { PageableParams } from "models/Pageable";

export interface DocumentResponse {
  id: string;
  vehicleId: string;
  fileName: string;
  filePath: string;
  fileSize: number;
  type: DocumentTypeKey;
  sourceId: string;
  contentType: string;
  createdDate: number[];
}

export interface DocumentSearchParams extends PageableParams {
  vehicleId?: string;
  type?: DocumentTypeKey;
  fileName?: string;
  sourceId?: string;
}
