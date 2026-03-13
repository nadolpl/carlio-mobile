import { BottomTabParamList } from "navigation/types";
import VehicleListScreen from "screens/vehicles/list";
import MaintenanceListScreen from "screens/maintenance/list";
import PartListScreen from "screens/parts/list";
import { ICONS } from "constants/icons";
import Icon from "components/atoms/icon";
import ExpenseListScreen from "screens/expenses/list";
import DocumentListScreen from "screens/documents/list";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScheduleListScreen from "screens/schedules/list";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRightContainerStyle: {
          paddingRight: 16,
        },
      }}
    >
      <Tab.Screen
        name="VehicleList"
        component={VehicleListScreen}
        options={{
          title: "Vehicles",
          tabBarIcon: ({ color, size }) => <Icon name={ICONS.VEHICLE} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="MaintenanceList"
        component={MaintenanceListScreen}
        options={{
          title: "Maintenances",
          tabBarIcon: ({ color, size }) => (
            <Icon name={ICONS.MAINTENANCE} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PartList"
        component={PartListScreen}
        options={{
          title: "Parts",
          tabBarIcon: ({ color, size }) => <Icon name={ICONS.PART} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="ExpenseList"
        component={ExpenseListScreen}
        options={{
          title: "Expenses",
          tabBarIcon: ({ color, size }) => <Icon name={ICONS.CASH} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="DocumentList"
        component={DocumentListScreen}
        options={{
          title: "Documents",
          tabBarIcon: ({ color, size }) => <Icon name={ICONS.DOCUMENT} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="ScheduleList"
        component={ScheduleListScreen}
        options={{
          title: "Schedules",
          tabBarIcon: ({ color, size }) => <Icon name={ICONS.SCHEDULE} color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;
