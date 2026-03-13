export const colors = {
  primary: "#1a79cb",
  success: "#1B812B",
  error: "#b51515",
  warning: "#B87700",

  background900: "#1c1c1c",
  background800: "#252525",
  background700: "#333333",
  background600: "#3c3c3c",

  textPrimary: "#dfdfdf",
  textSecondary: "#8f8f8f",
  textDisabled: "#5a5a5a",

  divider: "#333333",
  transparent: "transparent",
};

export const withAlpha = (hex: string, alpha: number) => {
  const alphaHex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${alphaHex}`;
};
