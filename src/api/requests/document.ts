import api from "api/config/api";
import { Pageable } from "models/Pageable";
import { DOCUMENTS } from "api/config/endpoints";
import { DocumentResponse, DocumentSearchParams } from "models/response/DocumentResponse";
import { DocumentRequest } from "models/requests/DocumentRequest";
import { File, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as authStorage from "api/services/authStorage";
import { DownloadRequest } from "models/requests/DownloadRequest";

export const requestDeleteDocument = (id: string) => api.delete<void>(`${DOCUMENTS}/${id}`);

export const requestSearchDocuments = (params?: DocumentSearchParams) =>
  api.get<Pageable<DocumentResponse>>(DOCUMENTS, { params });

export const requestDocument = (id: string) => api.get<DocumentResponse>(`${DOCUMENTS}/${id}`);

export const requestUploadDocument = (req: DocumentRequest) => {
  const formData = new FormData();

  formData.append("file", {
    uri: req.file.uri,
    name: req.file.name,
    type: req.file.type,
  });

  formData.append("vehicleId", req.vehicleId);
  formData.append("type", req.type);
  formData.append("sourceId", req.sourceId);

  return api.post<string>(DOCUMENTS, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const requestDownloadDocument = async ({ path, fileName }: DownloadRequest) => {
  const token = await authStorage.getAccessToken();
  const url = `${process.env.EXPO_PUBLIC_API_URL}/documents/download?path=${path}`;

  const destinationFile = new File(Paths.cache, fileName);

  try {
    if (destinationFile.exists) destinationFile.delete();

    const output = await File.downloadFileAsync(url, destinationFile, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const isSharingAvailable = await Sharing.isAvailableAsync();

    if (isSharingAvailable) await Sharing.shareAsync(output.uri);

    return output.uri;
  } catch (error) {
    console.error("Error downloading document:", error);
  }
};
