import { Pressable, StyleSheet, View } from "react-native";
import { useMaintenanceDetails } from "screens/maintenance/details/useMaintenanceDetails";
import { DetailsScreenWrapper } from "components/templates/DetailsScreenWrapper";
import { useDetailsNavigation } from "hooks/useDetailsNavigation";
import Text from "components/atoms/text";
import DetailRow from "components/molecules/detailRow";
import { formatDateArray } from "utils/date";
import { getEnumValueByKey } from "utils/enum";
import { MaintenanceType } from "models/enums/MaintenanceType";
import { formatMileage, formatPrice } from "utils/number";
import HeaderSection from "components/templates/DetailsScreenWrapper/components/HeaderSection";
import SectionCard from "components/templates/DetailsScreenWrapper/components/SectionCard";
import AttachmentsSection from "components/organisms/attachmentsSection";
import { colors } from "constants/colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { commonStyles } from "utils/styles";
import Icon from "components/atoms/icon";
import { ICONS } from "constants/icons";

const MaintenanceDetailsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { maintenance, handleEditMaintenance, handleDeleteMaintenance, confirmationModalProps } =
    useMaintenanceDetails();

  useDetailsNavigation({
    onEdit: handleEditMaintenance,
    onDelete: handleDeleteMaintenance,
  });

  const handlePressPart = (partId: string) => {
    navigation.navigate("PartDetails", { partId });
  };

  if (!maintenance) return null;

  return (
    <DetailsScreenWrapper confirmationModalProps={confirmationModalProps}>
      <HeaderSection
        title={maintenance.title}
        subtitle={formatDateArray(maintenance.performedDate)}
      />

      <SectionCard title="General Info">
        <DetailRow
          label="Type"
          value={getEnumValueByKey(MaintenanceType, maintenance.type)}
          isFirst
        />
        <DetailRow label="Mileage" value={formatMileage(maintenance.mileage)} isLast />
      </SectionCard>

      {maintenance.parts && maintenance.parts.length > 0 && (
        <SectionCard title="Parts">
          {maintenance.parts.map((part, index) => (
            <Pressable
              onPress={() => handlePressPart(part.partId)}
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
      )}

      <SectionCard title="Costs">
        <DetailRow label="Labor Cost" value={formatPrice(maintenance.laborCost)} isFirst />
        <DetailRow label="Parts Cost" value={formatPrice(maintenance.partsCost)} />
        <DetailRow label="Total Cost" value={formatPrice(maintenance.totalCost)} isLast />
      </SectionCard>

      {maintenance.description && (
        <SectionCard title="Description">
          <Text style={styles.descriptionText}>{maintenance.description}</Text>
        </SectionCard>
      )}

      <AttachmentsSection sourceId={maintenance.id} vehicleId={maintenance.vehicleId} />
    </DetailsScreenWrapper>
  );
};

const styles = StyleSheet.create({
  descriptionText: {
    lineHeight: 24,
    color: colors.textSecondary,
  },
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
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default MaintenanceDetailsScreen;
