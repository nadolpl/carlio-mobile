import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { colors } from "constants/colors";

export type IoniconsName = ComponentProps<typeof Ionicons>["name"];

interface IconProps {
  name: IoniconsName;
  size?: number;
  color?: string;
}

const Icon = ({ name, size = 24, color = colors.textPrimary }: IconProps) => (
  <Ionicons name={name} size={size} color={color} />
);

export default Icon;
