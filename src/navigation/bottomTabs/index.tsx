import { BottomTabParamList } from "navigation/types";
import VehicleListScreen from "screens/vehicles/list";
import MaintenanceListScreen from "screens/maintenance/list";
import { ICONS } from "constants/icons";
import Icon from "components/atoms/icon";
import ExpenseListScreen from "screens/expenses/list";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScheduleListScreen from "screens/schedules/list";
import { BottomMenuModal } from "components/molecules/moreMenuModal";
import { useMoreTabsMenu } from "navigation/bottomTabs/useMoreTabsMenu";
import ConfirmationModal from "components/molecules/confirmationModal";

const Tab = createBottomTabNavigator<BottomTabParamList>();
const DummyScreen = () => null;

const BottomTabsNavigation = () => {
  const { handleOpenMoreMenu, moreMenuProps, confirmationModalProps } = useMoreTabsMenu();

  return (
    <>
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
            tabBarIcon: ({ color, size }) => (
              <Icon name={ICONS.VEHICLE} color={color} size={size} />
            ),
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
          name="ExpenseList"
          component={ExpenseListScreen}
          options={{
            title: "Expenses",
            tabBarIcon: ({ color, size }) => <Icon name={ICONS.CASH} color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="ScheduleList"
          component={ScheduleListScreen}
          options={{
            title: "Schedules",
            tabBarIcon: ({ color, size }) => (
              <Icon name={ICONS.SCHEDULE} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MoreMenu"
          component={DummyScreen}
          options={{
            title: "More",
            tabBarIcon: ({ color, size }) => (
              <Icon name={ICONS.MORE_VERTICAL} color={color} size={size} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              handleOpenMoreMenu();
            },
          }}
        />
      </Tab.Navigator>
      <BottomMenuModal {...moreMenuProps} />
      <ConfirmationModal {...confirmationModalProps} />
    </>
  );
};

export default BottomTabsNavigation;
