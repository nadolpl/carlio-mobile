import { FlatList, StyleSheet, View } from "react-native";
import { useSearchVehicles } from "api/hooks/vehicle";
import VehicleCard from "screens/VehicleList/components/VehicleCard";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const VehicleListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data } = useSearchVehicles();

  const handlePress = (id: string) => {
    navigation.navigate("VehicleDetails", { vehicleId: id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.content}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VehicleCard vehicle={item} onPress={handlePress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export default VehicleListScreen;
