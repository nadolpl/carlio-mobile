import { StyleSheet, View } from "react-native";
import { VehicleResponse } from "models/response/VehicleResponse";
import { colors } from "constants/colors";
import ImagePicker from "components/atoms/imagePicker";
import { requestGetVehiclePhotoUrl } from "api/requests/vehicle";

interface VehiclePhotoProps {
  vehicle: VehicleResponse;
}

const VehiclePhoto = ({ vehicle }: VehiclePhotoProps) => {
  const image = vehicle.photoId ? requestGetVehiclePhotoUrl(vehicle.id, vehicle.photoId) : null;

  return (
    <View style={styles.container}>
      <ImagePicker vehicleId={vehicle.id} preimage={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    backgroundColor: colors.background600,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 12,
  },
  placeholder: { flex: 1, justifyContent: "center", alignItems: "center" },
  placeholderText: {
    fontSize: 80,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
});

export default VehiclePhoto;
