export const getChangedData = <T extends Record<string, any>>(
  dirtyFields: Record<string, any>,
  req: T,
): Partial<T> => {
  return Object.keys(dirtyFields).reduce((acc, key) => {
    const fieldKey = key as keyof T;
    const dirtyState = dirtyFields[key];

    if (!dirtyState) return acc;

    if (typeof dirtyState !== "object" || Array.isArray(dirtyState)) acc[fieldKey] = req[fieldKey];
    else acc[fieldKey] = getChangedData(dirtyState, req[fieldKey]) as T[keyof T];

    return acc;
  }, {} as Partial<T>);
};
