import { useMemo } from "react";
import { useSearchDocuments } from "api/hooks/document";

export const useFormattedAttachments = (sourceId: string) => {
  const { data } = useSearchDocuments({ sourceId });

  return useMemo(() => {
    if (!data) return [];

    const backendDocs = data.pages.flatMap((page) => page.content);
    return backendDocs.map((res) => ({
      file: {
        uri: res.filePath,
        name: res.fileName,
        type: res.contentType,
      },
      type: res.type,
      id: res.id,
    }));
  }, [data]);
};
