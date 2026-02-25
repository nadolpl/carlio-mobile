import { StyleSheet } from "react-native";
import { usePartDetails } from "screens/parts/details/usePartDetails";
import { DetailsScreenWrapper } from "components/templates/DetailsScreenWrapper";
import { useDetailsNavigation } from "hooks/useDetailsNavigation";
import Text from "components/atoms/text";
import DetailRow from "components/molecules/detailRow";
import { getEnumValueByKey } from "utils/enum";
import { PartCategory } from "models/enums/PartCategory";
import { PartSource } from "models/enums/PartSource";
import HeaderSection from "components/templates/DetailsScreenWrapper/components/HeaderSection";
import SectionCard from "components/templates/DetailsScreenWrapper/components/SectionCard";

const PartDetailsScreen = () => {
  const { part, handleDeletePart, handleEditPart, confirmationModalProps } = usePartDetails();

  useDetailsNavigation({
    onEdit: handleEditPart,
    onDelete: handleDeletePart,
    showActions: part?.source === "USER",
  });

  if (!part) return null;

  return (
    <DetailsScreenWrapper confirmationModalProps={confirmationModalProps}>
      <HeaderSection title={part.name} subtitle={part?.manufacturer} />

      <SectionCard title="System Information">
        <DetailRow
          label="Category"
          value={getEnumValueByKey(PartCategory, part.category)}
          isFirst
        />
        <DetailRow label="Source" value={getEnumValueByKey(PartSource, part.source)} isLast />
      </SectionCard>

      {part.description && (
        <SectionCard title="Description">
          <Text style={styles.descriptionText}>{part.description}</Text>
        </SectionCard>
      )}
    </DetailsScreenWrapper>
  );
};

const styles = StyleSheet.create({
  descriptionText: {
    lineHeight: 24,
  },
});

export default PartDetailsScreen;
