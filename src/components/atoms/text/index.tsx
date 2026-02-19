import { StyleSheet, Text as RNText, TextProps } from "react-native";
import { colors } from "constants/colors";

const Text = (props: TextProps) => {
  return (
    <RNText {...props} style={[styles.container, props.style]}>
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  container: {
    color: colors.textPrimary,
    fontSize: 16,
  },
});

export default Text;
