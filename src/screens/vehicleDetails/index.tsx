import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useVehicle } from "api/hooks/vehicle";
import Text from "components/atoms/text";
import DetailsHeader from "screens/vehicleDetails/components/DetailsHeader";
import VehiclePhoto from "screens/vehicleDetails/components/VehiclePhoto";
import DetailsDataRows from "screens/vehicleDetails/components/DetailsDataRows";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";

const VehicleDetailsScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "VehicleDetails">
    >();
  const { params } =
    useRoute<RouteProp<RootStackParamList, "VehicleDetails">>();

  const { data, isLoading } = useVehicle(params.vehicleId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton onPress={() => console.log("kliuk")} icon={ICONS.EDIT} />
      ),
    });
  }, []);

  if (isLoading || !data) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading vehicle data...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <VehiclePhoto vehicle={data} />
      <DetailsHeader vehicle={data} />
      <DetailsDataRows vehicle={data} />
    </ScrollView>
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
});

export default VehicleDetailsScreen;
