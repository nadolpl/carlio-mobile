import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "constants/colors";
import ConfirmationModal from "components/molecules/confirmationModal";
import { PropsWithChildren } from "react";

interface DetailsScreenWrapperProps {
  confirmationModalProps?: any;
  contentContainerStyle?: ViewStyle;
}

export const DetailsScreenWrapper = ({
  children,
  confirmationModalProps,
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
      {confirmationModalProps && <ConfirmationModal {...confirmationModalProps} />}
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
