import { DocumentTypeKey } from "models/enums/DocumentType";
import { CustomFile } from "models/CustomFile";

export interface DocumentRequest {
  vehicleId: string;
  file: CustomFile;
  type: DocumentTypeKey;
  sourceId: string;
}
