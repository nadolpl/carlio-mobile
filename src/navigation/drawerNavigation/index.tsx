import { DrawerParamList } from "navigation/types";
import VehicleListScreen from "screens/VehicleList";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "navigation/drawerNavigation/CustomDrawerContent";
import MaintenanceListScreen from "screens/MaintenanceListScreen";
import PartListScreen from "screens/PartListScreen";
import { ICONS } from "constants/icons";
import Icon from "components/atoms/icon";

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="VehicleList"
        component={VehicleListScreen}
        options={{
          title: "Vehicles",
          drawerIcon: ({ color, size }) => (
            <Icon name={ICONS.VEHICLE} color={color} size={size} />
          ),
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
          drawerIcon: ({ color, size }) => (
            <Icon name={ICONS.PART} color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
