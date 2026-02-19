import Navigator from "navigation";
import { StatusBar } from "expo-status-bar";
import ContextProviders from "contexts";
import Toast from "components/atoms/toast";

export default function App() {
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
