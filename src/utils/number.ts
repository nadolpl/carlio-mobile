export const formatCapacity = (capacity: number | null) =>
  capacity != null ? `${capacity / 1000} l` : null;

export const formatPower = (power: number | null) => (power != null ? `${power} KM` : null);

export const formatMileage = (mileage: number) => `${mileage.toLocaleString()} km`;

export const formatPrice = (price: number) => `${price} PLN`;
