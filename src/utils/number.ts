export const formattedCapacity = (capacity: number | null) =>
  capacity != null ? `${capacity / 1000} l` : null;

export const formattedPower = (power: number | null) => (power != null ? `${power} KM` : null);

export const formattedMileage = (mileage: number) => `${mileage} km`;

export const formattedPrice = (price: number) => `${price} PLN`;
