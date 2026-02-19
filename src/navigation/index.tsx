import DrawerNavigation from "navigation/drawerNavigation";
import { AppTheme } from "navigation/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import VehicleDetailsScreen from "screens/vehicleDetails";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "contexts/AuthContext";
import LoginScreen from "screens/login";

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
              name="VehicleDetails"
              component={VehicleDetailsScreen}
              options={{ headerShown: true, title: "Vehicle Details" }}
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
