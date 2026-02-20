export const formatDate = (dateArray: number[]) => {
  if (!dateArray || dateArray.length < 3) return "";
  const [year, month, day] = dateArray;
  return `${String(day).padStart(2, "0")}.${String(month).padStart(2, "0")}.${year}`;
};
