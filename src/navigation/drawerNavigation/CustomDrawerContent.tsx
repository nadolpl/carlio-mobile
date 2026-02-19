import { StyleSheet, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import LogoutButton from "navigation/drawerNavigation/LogoutButton";

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.listContainer}>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.footer}>
        <LogoutButton />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  listContainer: {
    flex: 1,
  },
  footer: {
    marginBottom: 20,
  },
});

export default CustomDrawerContent;
