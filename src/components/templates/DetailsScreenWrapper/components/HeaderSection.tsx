import { StyleSheet, View } from "react-native";
import Text from "components/atoms/text";
import { colors } from "constants/colors";

interface HeaderSectionProps {
  title: string;
  subtitle: string | null;
}

const HeaderSection = ({ title, subtitle }: HeaderSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 18,
    color: colors.primary,
    marginTop: 4,
    fontWeight: "600",
  },
});

export default HeaderSection;
