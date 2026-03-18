import { Pressable, StyleSheet, View } from "react-native";
import { commonStyles } from "utils/styles";
import Text from "components/atoms/text";
import { formatPrice } from "utils/number";
import Icon from "components/atoms/icon";
import { ICONS } from "constants/icons";
import { colors } from "constants/colors";
import SectionCard from "components/templates/DetailsScreenWrapper/components/SectionCard";
import { MaintenanceResponse } from "models/response/MaintenanceResponse";

interface MaintenanceDetailsPartCardProps {
  handlePress: (partId: string) => void;
  maintenance: MaintenanceResponse;
}

const MaintenanceDetailsPartList = ({
  handlePress,
  maintenance,
}: MaintenanceDetailsPartCardProps) => {
  return (
    <SectionCard title="Parts">
      {maintenance.parts.map((part, index) => (
        <Pressable
          onPress={() => handlePress(part.partId)}
          key={part.partId}
          style={({ pressed }) => [
            pressed && commonStyles.pressed,
            styles.partRow,
            index !== maintenance.parts.length - 1 && styles.partRowBorder,
          ]}
        >
          <View>
            <Text style={styles.partName}>{part.partName}</Text>
            <Text style={styles.partDetails}>
              {part.quantity} x {formatPrice(part.cost)}
            </Text>
          </View>

          <View style={styles.arrowContainer}>
            <Text style={styles.partTotal}>{formatPrice(part.quantity * part.cost)}</Text>
            <View>
              <Icon name={ICONS.ARROW_RIGHT} color={colors.textSecondary} />
            </View>
          </View>
        </Pressable>
      ))}
    </SectionCard>
  );
};

const styles = StyleSheet.create({
  partRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  partRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  partName: {
    fontWeight: "500",
    marginBottom: 4,
  },
  partDetails: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  partTotal: {
    fontWeight: "700",
  },
  arrowContainer: {
    gap: 16,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default MaintenanceDetailsPartList;
