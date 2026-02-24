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
import AddMaintenanceScreen from "screens/maintenance/add";
import MaintenanceDetailsScreen from "screens/maintenance/details";
import EditMaintenanceScreen from "screens/maintenance/edit";
import AddExpenseScreen from "screens/expenses/add";
import ExpenseDetailsScreen from "screens/expenses/details";
import EditExpenseScreen from "screens/expenses/edit";
import AddDocumentScreen from "screens/documents/add";
import DocumentDetailsScreen from "screens/documents/details";

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

            <Stack.Screen
              name="AddMaintenance"
              component={AddMaintenanceScreen}
              options={{ headerShown: true, title: "Add new maintenance" }}
            />
            <Stack.Screen
              name="MaintenanceDetails"
              component={MaintenanceDetailsScreen}
              options={{ headerShown: true, title: "Maintenance Details" }}
            />
            <Stack.Screen
              name="EditMaintenance"
              component={EditMaintenanceScreen}
              options={{ headerShown: true, title: "Edit maintenance" }}
            />

            <Stack.Screen
              name="AddExpense"
              component={AddExpenseScreen}
              options={{ headerShown: true, title: "Add new Expense" }}
            />
            <Stack.Screen
              name="ExpenseDetails"
              component={ExpenseDetailsScreen}
              options={{ headerShown: true, title: "Expense Details" }}
            />
            <Stack.Screen
              name="EditExpense"
              component={EditExpenseScreen}
              options={{ headerShown: true, title: "Edit Expense" }}
            />

            <Stack.Screen
              name="AddDocument"
              component={AddDocumentScreen}
              options={{ headerShown: true, title: "Add new Document" }}
            />
            <Stack.Screen
              name="DocumentDetails"
              component={DocumentDetailsScreen}
              options={{ headerShown: true, title: "Document Details" }}
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
