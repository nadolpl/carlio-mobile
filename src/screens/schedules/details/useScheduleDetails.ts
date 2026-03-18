import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import {
  useDeleteSchedule,
  useResetSchedule,
  useSchedule,
  useToggleActiveSchedule,
} from "api/hooks/schedule";
import { ICONS } from "constants/icons";
import { useConfirmationModal } from "contexts/ConfirmationModalContext";
import { useActionSheet } from "contexts/ActionSheetContext";

export const useScheduleDetails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "ScheduleDetails">>();
  const { params } = useRoute<RouteProp<RootStackParamList, "ScheduleDetails">>();
  const { data: schedule } = useSchedule(params.scheduleId);
  const { mutate: deleteSchedule } = useDeleteSchedule();
  const { mutate: resetSchedule } = useResetSchedule();
  const { mutate: toggleActiveSchedule } = useToggleActiveSchedule();
  const { showConfirmation } = useConfirmationModal();
  const { showActionSheet } = useActionSheet();

  const handleDeleteSchedule = () => {
    showConfirmation({
      title: "Delete Schedule",
      message: "Are you sure you want to delete this schedule?",
      variant: "error",
      onConfirm: () => {
        navigation.goBack();
        deleteSchedule(params.scheduleId);
      },
    });
  };

  const handleEditSchedule = () => schedule && navigation.navigate("EditSchedule", { schedule });

  const handleResetSchedule = () => {
    showConfirmation({
      title: "Reset Schedule",
      message: "Are you sure you want to reset this schedule?",
      onConfirm: () => {
        resetSchedule(params.scheduleId);
      },
    });
  };

  const handleToggleActiveSchedule = () => {
    const messageVariant = schedule?.active ? "Deactivate" : "Activate";
    showConfirmation({
      title: messageVariant + " Schedule",
      message: `Are you sure you want to ${messageVariant.toLowerCase()} this schedule?`,
      onConfirm: () => {
        toggleActiveSchedule(params.scheduleId);
      },
    });
  };

  const handleShowActionSheet = () => {
    showActionSheet([
      {
        label: "Reset Schedule",
        icon: ICONS.RELOAD,
        onPress: handleResetSchedule,
      },
      {
        label: schedule?.active ? "Deactivate Schedule" : "Activate Schedule",
        icon: ICONS.POWER,
        onPress: handleToggleActiveSchedule,
      },
      {
        label: "Delete Schedule",
        icon: ICONS.DELETE,
        onPress: handleDeleteSchedule,
        isDestructive: true,
      },
    ]);
  };

  return {
    schedule,
    handleDeleteSchedule,
    handleEditSchedule,
    handleResetSchedule,
    handleToggleActiveSchedule,
    handleShowActionSheet,
  };
};
