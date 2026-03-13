import { Pressable } from "react-native";
import Icon, { IoniconsName } from "components/atoms/icon";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { commonStyles } from "utils/styles";

interface IconButtonProps {
  onPress: () => void;
  icon: IoniconsName;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const IconButton = ({ onPress, icon, size = 26, color, style }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [pressed && commonStyles.pressed, style]}>
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
