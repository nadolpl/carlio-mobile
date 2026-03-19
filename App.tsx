import Navigator from "navigation";
import { StatusBar } from "expo-status-bar";
import ContextProviders from "contexts";
import Toast from "components/atoms/toast";
import { useNotificationSetup } from "hooks/useNotificationSetup";

export default function App() {
  useNotificationSetup();

  return (
    <>
      <StatusBar style="light" />
      <ContextProviders>
        <Navigator />
        <Toast />
      </ContextProviders>
    </>
  );
}
