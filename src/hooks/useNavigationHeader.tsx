import { ReactNode, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

interface NavigationHeaderProps {
  renderHeaderRight: () => ReactNode;
}

export const useNavigationHeader = ({ renderHeaderRight }: NavigationHeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderHeaderRight,
    });
  }, [navigation, renderHeaderRight]);
};
