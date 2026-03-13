import { StyleSheet, View } from "react-native";
import { colors } from "constants/colors";

interface ScheduleCardProgressBarProps {
  progressPercentage: number;
  isOverdue: boolean;
}

const getStatusColor = (isOverdue: boolean, progressPercentage: number) => {
  const isWarning = progressPercentage >= 80 && !isOverdue;
  if (isOverdue) return colors.error;
  if (isWarning) return colors.warning;
  return colors.success;
};

const ScheduleCardProgressBar = ({
  progressPercentage,
  isOverdue,
}: ScheduleCardProgressBarProps) => {
  const progressColor = getStatusColor(isOverdue, progressPercentage);
  const barWidth = Math.min(Math.max(progressPercentage, 0), 100);

  return (
    <View style={styles.progressBarBackground}>
      <View
        style={[styles.progressBarFill, { backgroundColor: progressColor, width: `${barWidth}%` }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarBackground: {
    height: 8,
    backgroundColor: colors.background600,
    borderRadius: 4,
    marginBottom: 16,
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 4,
  },
});

export default ScheduleCardProgressBar;
