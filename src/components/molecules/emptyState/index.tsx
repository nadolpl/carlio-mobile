import { StyleSheet, View } from "react-native";
import { colors } from "constants/colors";
import Button from "components/atoms/button";
import Icon, { IoniconsName } from "components/atoms/icon";
import Text from "components/atoms/text";

interface EmptyStateProps {
  icon: IoniconsName;
  title: string;
  description: string;
  actionTitle?: string;
  onAction?: () => void;
}

const EmptyState = ({ icon, title, description, actionTitle, onAction }: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={80} color={colors.textSecondary} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {actionTitle && onAction && (
        <Button variant="outlined" title={actionTitle} onPress={onAction} style={styles.button} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 8,
  },
  description: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 18,
  },
  button: {
    minWidth: 200,
  },
});

export default EmptyState;
