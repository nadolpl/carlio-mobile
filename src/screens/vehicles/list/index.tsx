import { FlatList, StyleSheet, View } from "react-native";
import { useSearchVehicles } from "api/hooks/vehicle";
import VehicleCard from "screens/vehicles/list/components/VehicleCard";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";

const VehicleListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data } = useSearchVehicles();

  const handlePress = (id: string) => {
    navigation.navigate("VehicleDetails", { vehicleId: id });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton onPress={() => navigation.navigate("AddVehicle")} icon={ICONS.ADD} />
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.content}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VehicleCard vehicle={item} onPress={handlePress} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginBottom: 25,
  },
});

export default VehicleListScreen;
