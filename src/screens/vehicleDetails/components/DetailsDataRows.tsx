import { StyleSheet, View } from "react-native";
import { VehicleResponse } from "models/response/VehicleResponse";
import {
  formattedCapacity,
  formattedMileage,
  formattedPower,
} from "utils/number";
import DetailRow from "screens/vehicleDetails/components/DetailRow";
import Text from "components/atoms/text";
import { colors } from "constants/colors";

interface DetailsDataRowsProps {
  vehicle: VehicleResponse;
}

const DetailsDataRows = ({ vehicle }: DetailsDataRowsProps) => {
  return (
    <>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical data</Text>
        <DetailRow label="Mileage" value={formattedMileage(vehicle.mileage)} />
        <DetailRow label="Fuel" value={vehicle.fuelType} />
        <DetailRow label="Power" value={formattedPower(vehicle.power)} />
        <DetailRow
          label="Capacity"
          value={formattedCapacity(vehicle.capacity)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other data</Text>
        <DetailRow
          label="Registration Number"
          value={vehicle.registrationNumber}
        />
        <DetailRow label="VIN" value={vehicle.vin} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: colors.background800,
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 15,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default DetailsDataRows;
