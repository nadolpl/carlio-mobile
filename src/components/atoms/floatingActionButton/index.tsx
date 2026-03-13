import { StyleSheet } from "react-native";
import { colors } from "constants/colors";
import IconButton from "components/atoms/iconButton";
import { IoniconsName } from "components/atoms/icon";

interface FloatingActionButtonProps {
  onPress: () => void;
  icon: IoniconsName;
}

const FloatingActionButton = ({ onPress, icon }: FloatingActionButtonProps) => {
  return <IconButton onPress={onPress} icon={icon} size={40} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FloatingActionButton;
