import { StyleSheet } from "react-native";
import { useMaintenanceDetails } from "screens/maintenance/details/useMaintenanceDetails";
import { DetailsScreenWrapper } from "components/templates/DetailsScreenWrapper";
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
import MaintenanceDetailsPartList from "screens/maintenance/details/components/MaintenanceDetailsPartList";

const MaintenanceDetailsScreen = () => {
  const { maintenance, handlePressPart } = useMaintenanceDetails();

  if (!maintenance) return null;

  return (
    <DetailsScreenWrapper>
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

      {maintenance.description && (
        <SectionCard title="Description">
          <Text style={styles.descriptionText}>{maintenance.description}</Text>
        </SectionCard>
      )}

      {maintenance.parts && maintenance.parts.length > 0 && (
        <MaintenanceDetailsPartList handlePress={handlePressPart} maintenance={maintenance} />
      )}

      <AttachmentsSection sourceId={maintenance.id} vehicleId={maintenance.vehicleId} />
    </DetailsScreenWrapper>
  );
};

const styles = StyleSheet.create({
  descriptionText: {
    lineHeight: 24,
    color: colors.textPrimary,
  },
});

export default MaintenanceDetailsScreen;
