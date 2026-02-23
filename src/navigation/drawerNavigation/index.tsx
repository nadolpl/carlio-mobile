import { DrawerParamList } from "navigation/types";
import VehicleListScreen from "screens/vehicles/list";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "navigation/drawerNavigation/CustomDrawerContent";
import MaintenanceListScreen from "screens/maintenance/list";
import PartListScreen from "screens/parts/list";
import { ICONS } from "constants/icons";
import Icon from "components/atoms/icon";
import ExpenseListScreen from "screens/expenses/list";

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerRightContainerStyle: {
          paddingRight: 16,
        },
      }}
    >
      <Drawer.Screen
        name="VehicleList"
        component={VehicleListScreen}
        options={{
          title: "Vehicles",
          drawerIcon: ({ color, size }) => <Icon name={ICONS.VEHICLE} color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="MaintenanceList"
        component={MaintenanceListScreen}
        options={{
          title: "Maintenances",
          drawerIcon: ({ color, size }) => (
            <Icon name={ICONS.MAINTENANCE} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="PartList"
        component={PartListScreen}
        options={{
          title: "Parts",
          drawerIcon: ({ color, size }) => <Icon name={ICONS.PART} color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="ExpenseList"
        component={ExpenseListScreen}
        options={{
          title: "Expenses",
          drawerIcon: ({ color, size }) => <Icon name={ICONS.CASH} color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
