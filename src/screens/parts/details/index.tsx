import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { usePartDetails } from "screens/parts/details/usePartDetails";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import { colors } from "constants/colors";
import ConfirmationModal from "components/molecules/confirmationModal";
import Text from "components/atoms/text";
import { getEnumValueByKey } from "utils/enum";
import { PartCategory } from "models/enums/PartCategory";
import { PartSource } from "models/enums/PartSource";

const PartDetailsScreen = () => {
  const { part, handleDeletePart, handleEditPart, navigation, confirmationModalProps } =
    usePartDetails();

  useLayoutEffect(() => {
    if (part?.source === "USER")
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.headerRight}>
            <IconButton onPress={handleEditPart} icon={ICONS.EDIT} />
            <IconButton onPress={handleDeletePart} icon={ICONS.DELETE} color={colors.error} />
          </View>
        ),
      });
  }, [navigation, handleEditPart, handleDeletePart]);

  if (!part) return null;

  return (
    <View style={styles.mainWrapper}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerSection}>
          <Text style={styles.partName}>{part.name}</Text>
          <Text style={styles.manufacturerSub}>{part.manufacturer}</Text>
        </View>

        <View style={styles.detailsCard}>
          <DetailRow
            label="Category"
            value={getEnumValueByKey(PartCategory, part.category)}
            isFirst
          />
          <DetailRow label="Source" value={getEnumValueByKey(PartSource, part.source)} />
        </View>

        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Part description</Text>
          <Text style={styles.descriptionText}>
            {part.description || "There is no description for this part."}
          </Text>
        </View>
      </ScrollView>

      <ConfirmationModal {...confirmationModalProps} />
    </View>
  );
};

const DetailRow = ({ label, value, isFirst, isLast }: any) => (
  <View style={[styles.detailRow, isFirst && { borderTopWidth: 0 }, isLast && { marginBottom: 0 }]}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

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
  headerSection: {
    marginBottom: 24,
  },
  partName: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  manufacturerSub: {
    fontSize: 18,
    color: colors.primary,
    marginTop: 4,
    fontWeight: "600",
  },
  detailsCard: {
    backgroundColor: colors.background800,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.background700,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  detailLabel: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  detailValue: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "500",
  },
  descriptionSection: {
    marginTop: 8,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
    marginLeft: 4,
  },
  descriptionText: {
    color: colors.textPrimary,
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: colors.background800,
    padding: 16,
    borderRadius: 12,
  },
  headerRight: {
    flexDirection: "row",
    gap: 16,
    marginRight: 10,
  },
});

export default PartDetailsScreen;
