import { Pressable, StyleSheet, View } from "react-native";
import { VehicleListedResponse } from "models/response/VehicleListedResponse";
import { colors } from "constants/colors";
import Text from "components/atoms/text";
import { commonStyles } from "utils/styles";
import Badge from "components/atoms/badge";

interface VehicleCardProps {
  vehicle: VehicleListedResponse;
  onPress: (id: string) => void;
}

const VehicleCard = ({ vehicle, onPress }: VehicleCardProps) => {
  return (
    <Pressable
      onPress={() => onPress(vehicle.id)}
      style={({ pressed }) => [styles.container, pressed && commonStyles.pressed]}
    >
      <View style={styles.placeholderContainer}>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>{vehicle.brand.charAt(0)}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>{vehicle.name}</Text>
        <Badge label={`${vehicle.brand} ${vehicle.model}`} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background800,
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  placeholderContainer: {
    marginRight: 16,
  },
  placeholder: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: colors.background700,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.textSecondary,
  },
  title: {
    fontWeight: "800",
    marginBottom: 6,
  },
});

export default VehicleCard;
