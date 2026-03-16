import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "constants/colors";
import { BottomSheet } from "components/molecules/bottomSheet";
import Text from "components/atoms/text";
import Icon, { IoniconsName } from "components/atoms/icon";

export interface MenuAction {
  label: string;
  icon?: IoniconsName;
  onPress: () => void;
  isDestructive?: boolean;
}

export interface BottomMenuModalProps {
  visible: boolean;
  onClose: () => void;
  actions: MenuAction[];
}

export const BottomMenuModal = ({ visible, onClose, actions }: BottomMenuModalProps) => {
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <View style={styles.actionsContainer}>
        {actions.map((action, index) => {
          const isLast = index === actions.length - 1;

          return (
            <Pressable
              key={action.label}
              style={[styles.actionButton, !isLast && styles.actionButtonBorder]}
              onPress={() => {
                onClose();
                action.onPress();
              }}
            >
              {action.icon && (
                <Icon
                  name={action.icon}
                  size={18}
                  color={action.isDestructive ? colors.error : colors.textPrimary}
                />
              )}
              <Text style={[action.isDestructive && styles.destructiveText]}>{action.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    backgroundColor: colors.background900,
    borderRadius: 16,
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  actionButtonBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.background700,
  },
  destructiveText: {
    color: colors.error,
  },
});
