import { Pressable } from "react-native";
import Icon, { IoniconsName } from "components/atoms/icon";

interface IconButtonProps {
  onPress: () => void;
  icon: IoniconsName;
}

const IconButton = ({ onPress, icon }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name={icon} />
    </Pressable>
  );
};

export default IconButton;
