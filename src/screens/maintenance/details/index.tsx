import { StyleSheet } from "react-native";
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

const MaintenanceDetailsScreen = () => {
  const { maintenance, handleEditMaintenance, handleDeleteMaintenance, confirmationModalProps } =
    useMaintenanceDetails();

  useDetailsNavigation({
    onEdit: handleEditMaintenance,
    onDelete: handleDeleteMaintenance,
  });

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

      <SectionCard title="Costs">
        <DetailRow label="Labor Cost" value={formatPrice(maintenance.laborCost)} isFirst />
        <DetailRow label="Parts Cost" value={formatPrice(maintenance.partsCost)} />
        <DetailRow label="Total Cost" value={formatPrice(maintenance.totalCost)} isLast />
      </SectionCard>

      <SectionCard title="Description">
        <Text style={styles.descriptionText}>
          {maintenance.description || "No description provided for this maintenance."}
        </Text>
      </SectionCard>
    </DetailsScreenWrapper>
  );
};

const styles = StyleSheet.create({
  descriptionText: {
    lineHeight: 24,
  },
});

export default MaintenanceDetailsScreen;
