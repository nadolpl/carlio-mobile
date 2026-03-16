import { StyleSheet, View } from "react-native";
import Text from "components/atoms/text";
import { colors } from "constants/colors";
import { PropsWithChildren } from "react";

interface SectionCardProps {
  title: string;
}

const SectionCard = ({ title, children }: SectionCardProps & PropsWithChildren) => {
  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.detailsCard}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
    marginTop: 16,
    marginLeft: 4,
  },
  detailsCard: {
    backgroundColor: colors.background800,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.background700,
  },
});

export default SectionCard;
