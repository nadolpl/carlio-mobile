import { useCallback } from "react";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import { useNavigationHeader } from "hooks/useNavigationHeader";

interface ListNavigationProps {
  onPressAdd: () => void;
}

export const useListNavigation = ({ onPressAdd }: ListNavigationProps) => {
  const renderHeaderRight = useCallback(
    () => <IconButton onPress={onPressAdd} icon={ICONS.ADD} />,
    [onPressAdd],
  );

  useNavigationHeader({ renderHeaderRight });
};
