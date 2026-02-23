import DrawerNavigation from "navigation/drawerNavigation";
import { AppTheme } from "navigation/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import VehicleDetailsScreen from "screens/vehicles/details";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "contexts/AuthContext";
import LoginScreen from "screens/login";
import AddVehicleScreen from "screens/vehicles/add";
import EditVehicleScreen from "screens/vehicles/edit";
import AddPartScreen from "screens/parts/add";
import PartDetailsScreen from "screens/parts/details";
import EditPartScreen from "screens/parts/edit";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="MainTabs" component={DrawerNavigation} />
            <Stack.Screen
              name="AddPart"
              component={AddPartScreen}
              options={{ headerShown: true, title: "Add new part" }}
            />
            <Stack.Screen
              name="PartDetails"
              component={PartDetailsScreen}
              options={{ headerShown: true, title: "Part Details" }}
            />
            <Stack.Screen
              name="EditPart"
              component={EditPartScreen}
              options={{ headerShown: true, title: "Edit part" }}
            />
            <Stack.Screen
              name="AddVehicle"
              component={AddVehicleScreen}
              options={{ headerShown: true, title: "Add new vehicle" }}
            />
            <Stack.Screen
              name="VehicleDetails"
              component={VehicleDetailsScreen}
              options={{ headerShown: true, title: "Vehicle Details" }}
            />
            <Stack.Screen
              name="EditVehicle"
              component={EditVehicleScreen}
              options={{ headerShown: true, title: "Edit vehicle" }}
            />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
