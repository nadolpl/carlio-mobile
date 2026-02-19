export const formattedCapacity = (capacity: number | null) =>
  capacity === null ? "" : `${capacity / 1000} l`;

export const formattedPower = (power: number | null) =>
  power === null ? "" : `${power} KM`;

export const formattedMileage = (mileage: number) => `${mileage} km`;

export const formattedPrice = (price: number) => `${price} PLN`;
