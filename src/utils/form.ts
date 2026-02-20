export const getChangedData = <T>(dirtyFields: Record<string, boolean>, req: T): Partial<T> => {
  return Object.keys(dirtyFields).reduce((acc, key) => {
    const fieldKey = key as keyof T;
    acc[fieldKey] = req[fieldKey];
    return acc;
  }, {} as Partial<T>);
};
