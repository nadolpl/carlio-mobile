import { StyleSheet, View } from "react-native";
import Text from "components/atoms/text";
import { VehicleResponse } from "models/response/VehicleResponse";
import { colors } from "constants/colors";

interface DetailsHeaderProps {
  vehicle: VehicleResponse;
}

const DetailsHeader = ({ vehicle }: DetailsHeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        {vehicle.brand} {vehicle.model}
      </Text>
      {vehicle.productionYear && (
        <Text style={styles.subtitle}>{vehicle.productionYear}</Text>
      )}
      <Text style={styles.customName}>"{vehicle.name}"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: colors.background800,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 4,
  },
  customName: {
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 4,
  },
});

export default DetailsHeader;
