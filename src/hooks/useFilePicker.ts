import * as DocumentPicker from "expo-document-picker";

export const useFilePicker = () => {
  const pickFiles = async (multiple = false) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        multiple,
        copyToCacheDirectory: true,
        type: "*/*",
      });

      if (!result.canceled && result.assets) {
        return result.assets.map((asset) => ({
          uri: asset.uri,
          name: asset.name,
          type: asset.mimeType || "application/octet-stream",
        }));
      }
    } catch {}
    return [];
  };

  return { pickFiles };
};
