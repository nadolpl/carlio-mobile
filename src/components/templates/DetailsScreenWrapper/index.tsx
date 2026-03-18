import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "constants/colors";
import { PropsWithChildren } from "react";

interface DetailsScreenWrapperProps {
  contentContainerStyle?: ViewStyle;
}

export const DetailsScreenWrapper = ({
  children,
  contentContainerStyle,
}: DetailsScreenWrapperProps & PropsWithChildren) => {
  return (
    <View style={styles.mainWrapper}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: colors.background900,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
});
