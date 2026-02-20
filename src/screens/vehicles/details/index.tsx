import { ScrollView, StyleSheet, View } from "react-native";
import DetailsHeader from "screens/vehicles/details/components/DetailsHeader";
import VehiclePhoto from "screens/vehicles/details/components/VehiclePhoto";
import DetailsDataRows from "screens/vehicles/details/components/DetailsDataRows";
import { useLayoutEffect } from "react";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import ConfirmationModal from "components/molecules/confirmationModal";
import { colors } from "constants/colors";
import { useVehicleDetails } from "screens/vehicles/details/useVehicleDetails";

const VehicleDetailsScreen = () => {
  const { navigation, vehicle, handleEditVehicle, handleDeleteVehicle, confirmationModalProps } =
    useVehicleDetails();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          <IconButton onPress={handleEditVehicle} icon={ICONS.EDIT} />
          <IconButton onPress={handleDeleteVehicle} icon={ICONS.DELETE} color={colors.error} />
        </View>
      ),
    });
  }, [navigation, handleEditVehicle, handleDeleteVehicle]);

  if (!vehicle) return null;

  return (
    <>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <VehiclePhoto vehicle={vehicle} />
        <DetailsHeader vehicle={vehicle} />
        <DetailsDataRows vehicle={vehicle} />
      </ScrollView>
      <ConfirmationModal {...confirmationModalProps} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
  },
  headerRight: {
    flexDirection: "row",
    gap: 16,
  },
});

export default VehicleDetailsScreen;
