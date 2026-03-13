import { StyleSheet, View } from "react-native";
import Text from "components/atoms/text";
import Badge from "components/atoms/badge";

interface ScheduleCardHeaderProps {
  name: string;
  active: boolean;
  isOverdue: boolean;
}

const ScheduleCardHeader = ({ name, active, isOverdue }: ScheduleCardHeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{name}</Text>
      {isOverdue && active && <Badge label="Overdue" />}
      {!active && <Badge label="Inactive" />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ScheduleCardHeader;
