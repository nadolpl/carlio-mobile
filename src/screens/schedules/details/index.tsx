import { StyleSheet } from "react-native";
import { colors } from "constants/colors";
import { formatDateArray } from "utils/date";
import DetailRow from "components/molecules/detailRow";
import { formatMileage } from "utils/number";
import SectionCard from "components/templates/DetailsScreenWrapper/components/SectionCard";
import { DetailsScreenWrapper } from "components/templates/DetailsScreenWrapper";
import ScheduleCard from "screens/schedules/components/card";
import { useDetailsNavigation } from "hooks/useDetailsNavigation";
import { useScheduleDetails } from "screens/schedules/details/useScheduleDetails";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import { MoreMenuModal } from "components/molecules/moreMenuModal";

const ScheduleDetailsScreen = () => {
  const {
    schedule,
    handleEditSchedule,
    confirmationModalProps,
    handleOpenMoreMenu,
    moreMenuProps,
  } = useScheduleDetails();

  useDetailsNavigation({
    onEdit: handleEditSchedule,
    extraActions: <IconButton onPress={handleOpenMoreMenu} icon={ICONS.MORE_VERTICAL} />,
  });

  if (!schedule) return null;

  return (
    <>
      <DetailsScreenWrapper confirmationModalProps={confirmationModalProps}>
        <ScheduleCard schedule={schedule} />

        <SectionCard title="Intervals">
          <DetailRow
            isFirst
            label="Distance interval"
            value={schedule.intervalKilometers ? `Every ${schedule.intervalKilometers} km` : "None"}
          />
          <DetailRow
            isLast
            label="Time interval"
            value={schedule.intervalDays ? `Every ${schedule.intervalDays} days` : "None"}
          />
        </SectionCard>

        <SectionCard title="History and future schedule">
          <DetailRow
            isFirst
            label="Last performed date"
            value={
              schedule.lastPerformedDate ? formatDateArray(schedule.lastPerformedDate) : "No data"
            }
          />
          <DetailRow
            label="Last performed mileage"
            value={
              schedule.lastPerformedMileage
                ? formatMileage(schedule.lastPerformedMileage)
                : "No data"
            }
          />
          <DetailRow
            label="Next due date"
            value={schedule.nextDueDate ? formatDateArray(schedule.nextDueDate) : "No data"}
            valueStyle={schedule.isOverdue ? styles.textError : undefined}
          />
          <DetailRow
            isLast
            label="Next due mileage"
            value={schedule.nextDueMileage ? formatMileage(schedule.nextDueMileage) : "No data"}
            valueStyle={schedule.isOverdue ? styles.textError : undefined}
          />
        </SectionCard>
      </DetailsScreenWrapper>
      <MoreMenuModal {...moreMenuProps} />
    </>
  );
};

const styles = StyleSheet.create({
  textError: {
    color: colors.error,
  },
});

export default ScheduleDetailsScreen;
