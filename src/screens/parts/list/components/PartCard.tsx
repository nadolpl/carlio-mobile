import { Pressable, StyleSheet, View } from "react-native";
import { PartResponse } from "models/response/PartResponse";
import { colors } from "constants/colors";
import Text from "components/atoms/text";
import Badge from "components/atoms/badge";
import { getEnumValueByKey } from "utils/enum";
import { PartCategory } from "models/enums/PartCategory";
import { commonStyles } from "utils/styles";

interface PartCardProps {
  part: PartResponse;
  onPress: (id: string) => void;
}

const PartCard = ({ part, onPress }: PartCardProps) => {
  return (
    <Pressable
      onPress={() => onPress(part.id)}
      style={({ pressed }) => [styles.container, pressed && commonStyles.pressed]}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {part.name}
        </Text>
        <Text style={styles.manufacturer} numberOfLines={1}>
          {part.manufacturer}
        </Text>
      </View>

      <Badge label={getEnumValueByKey(PartCategory, part.category)} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.background800,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  infoContainer: {
    flex: 1,
    paddingRight: 16,
  },
  name: {
    fontWeight: "700",
    marginBottom: 4,
  },
  manufacturer: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textSecondary,
  },
});

export default PartCard;
