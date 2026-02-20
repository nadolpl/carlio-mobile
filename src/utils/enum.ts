type EnumObject = Record<string, string>;

export interface EnumOptions {
  label: string;
  value: string;
}

export const mapEnumToOptions = <T extends EnumObject>(e: T) =>
  Object.entries(e).map(
    ([key, label]) =>
      ({
        label: label,
        value: key,
      }) as EnumOptions,
  );

export const getEnumKeys = <T extends EnumObject>(e: T) => Object.keys(e);

export const getEnumValueByKey = <T extends EnumObject>(enumObject: T, key: keyof T) =>
  enumObject[key as keyof T];
