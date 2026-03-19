import dayjs from "dayjs";

export const formatDateArray = (dateArray: number[], format?: string) => {
  if (!dateArray || dateArray.length < 3) return "";
  const [year, month, day] = dateArray;
  return dayjs(`${year}-${month}-${day}`).format(format ?? "DD.MM.YYYY");
};

export const formatDate = (date: string, format?: string) => {
  if (!date) return "";
  return dayjs(date).format(format ?? "DD.MM.YYYY");
};

export const formatDateArrayToISO = (dateArray: number[]) => {
  if (!dateArray || dateArray.length < 3) return "";
  const [year, month, day] = dateArray;
  return dayjs(`${year}-${month}-${day}`).format("YYYY-MM-DDTHH:mm");
};

export const formatDateArrayToDate = (dateArray: number[] | null | undefined) => {
  if (!dateArray || dateArray.length < 3) return null;
  const [year, month, day, hours = 0, minutes = 0, seconds = 0] = dateArray;
  return new Date(year, month - 1, day, hours, minutes, seconds);
};
