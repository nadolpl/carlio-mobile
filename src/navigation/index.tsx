import { AppTheme } from "navigation/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "contexts/AuthContext";
import BottomTabsNavigation from "navigation/bottomTabs";
import LoginScreen from "screens/login";
import RegisterScreen from "screens/register";
import AddPartScreen from "screens/parts/add";
import DocumentDetailsScreen from "screens/documents/details";
import AddDocumentScreen from "screens/documents/add";
import PartDetailsScreen from "screens/parts/details";
import EditPartScreen from "screens/parts/edit";
import AddVehicleScreen from "screens/vehicles/add";
import VehicleDetailsScreen from "screens/vehicles/details";
import EditVehicleScreen from "screens/vehicles/edit";
import AddMaintenanceScreen from "screens/maintenance/add";
import MaintenanceDetailsScreen from "screens/maintenance/details";
import EditMaintenanceScreen from "screens/maintenance/edit";
import AddExpenseScreen from "screens/expenses/add";
import ExpenseDetailsScreen from "screens/expenses/details";
import EditExpenseScreen from "screens/expenses/edit";
import ScheduleEditScreen from "screens/schedules/edit";
import ScheduleDetailsScreen from "screens/schedules/details";
import ScheduleAddScreen from "screens/schedules/add";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="MainTabs" component={BottomTabsNavigation} />

            <Stack.Group screenOptions={{ headerShown: true }}>
              <Stack.Screen
                name="AddPart"
                component={AddPartScreen}
                options={{ title: "Add new part" }}
              />
              <Stack.Screen
                name="PartDetails"
                component={PartDetailsScreen}
                options={{ title: "Part Details" }}
              />
              <Stack.Screen
                name="EditPart"
                component={EditPartScreen}
                options={{ title: "Edit part" }}
              />

              <Stack.Screen
                name="AddVehicle"
                component={AddVehicleScreen}
                options={{ title: "Add new vehicle" }}
              />
              <Stack.Screen
                name="VehicleDetails"
                component={VehicleDetailsScreen}
                options={{ title: "Vehicle Details" }}
              />
              <Stack.Screen
                name="EditVehicle"
                component={EditVehicleScreen}
                options={{ title: "Edit vehicle" }}
              />

              <Stack.Screen
                name="AddMaintenance"
                component={AddMaintenanceScreen}
                options={{ title: "Add new maintenance" }}
              />
              <Stack.Screen
                name="MaintenanceDetails"
                component={MaintenanceDetailsScreen}
                options={{ title: "Maintenance Details" }}
              />
              <Stack.Screen
                name="EditMaintenance"
                component={EditMaintenanceScreen}
                options={{ title: "Edit maintenance" }}
              />

              <Stack.Screen
                name="AddExpense"
                component={AddExpenseScreen}
                options={{ title: "Add new Expense" }}
              />
              <Stack.Screen
                name="ExpenseDetails"
                component={ExpenseDetailsScreen}
                options={{ title: "Expense Details" }}
              />
              <Stack.Screen
                name="EditExpense"
                component={EditExpenseScreen}
                options={{ title: "Edit Expense" }}
              />

              <Stack.Screen
                name="AddSchedule"
                component={ScheduleAddScreen}
                options={{ title: "Add new Schedule" }}
              />
              <Stack.Screen
                name="ScheduleDetails"
                component={ScheduleDetailsScreen}
                options={{ title: "Schedule Details" }}
              />
              <Stack.Screen
                name="EditSchedule"
                component={ScheduleEditScreen}
                options={{ title: "Edit Schedule" }}
              />

              <Stack.Screen
                name="AddDocument"
                component={AddDocumentScreen}
                options={{ title: "Add new Document" }}
              />
              <Stack.Screen
                name="DocumentDetails"
                component={DocumentDetailsScreen}
                options={{ title: "Document Details" }}
              />
            </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: true, title: "Create an account" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
