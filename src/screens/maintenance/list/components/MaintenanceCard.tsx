import { Pressable, StyleSheet, View } from "react-native";
import { MaintenanceListedResponse } from "models/response/MaintenanceListedResponse";
import { commonStyles } from "utils/styles";
import { formatDate } from "utils/date";
import { colors } from "constants/colors";
import Text from "components/atoms/text";
import Badge from "components/atoms/badge";
import { getEnumValueByKey } from "utils/enum";
import { MaintenanceType } from "models/enums/MaintenanceType";
import { formatPrice } from "utils/number";

interface MaintenanceCardProps {
  maintenance: MaintenanceListedResponse;
  onPress: (id: string) => void;
}

const MaintenanceCard = ({ maintenance, onPress }: MaintenanceCardProps) => {
  return (
    <Pressable
      onPress={() => onPress(maintenance.id)}
      style={({ pressed }) => [styles.container, pressed && commonStyles.pressed]}
    >
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1}>
          {maintenance.title}
        </Text>
        <Text style={styles.date}>{formatDate(maintenance.performedDate)}</Text>
      </View>

      {maintenance.description && (
        <Text style={styles.description} numberOfLines={2}>
          {maintenance.description}
        </Text>
      )}

      <View style={styles.footer}>
        <Badge label={getEnumValueByKey(MaintenanceType, maintenance.type)} />
        <Text style={styles.costText}>{formatPrice(maintenance.totalCost)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background800,
    borderRadius: 12,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  costText: {
    fontSize: 14,
    fontWeight: "800",
  },
});

export default MaintenanceCard;
