import { StyleSheet, View } from "react-native";

interface MaintenanceListScreenProps {}

const MaintenanceListScreen = ({}: MaintenanceListScreenProps) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MaintenanceListScreen;
