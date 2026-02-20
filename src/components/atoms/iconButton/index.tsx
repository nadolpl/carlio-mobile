import { Pressable } from "react-native";
import Icon, { IoniconsName } from "components/atoms/icon";

interface IconButtonProps {
  onPress: () => void;
  icon: IoniconsName;
  size?: number;
  color?: string;
}

const IconButton = ({ onPress, icon, size = 26, color }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
