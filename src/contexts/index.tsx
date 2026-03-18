import { PropsWithChildren } from "react";
import QueryProvider from "contexts/QueryContext";
import { AuthProvider } from "contexts/AuthContext";
import { ConfirmationModalProvider } from "contexts/ConfirmationModalContext";
import { ActionSheetProvider } from "contexts/ActionSheetContext";

const ContextProviders = ({ children }: PropsWithChildren) => (
  <AuthProvider>
    <QueryProvider>
      <ConfirmationModalProvider>
        <ActionSheetProvider>{children}</ActionSheetProvider>
      </ConfirmationModalProvider>
    </QueryProvider>
  </AuthProvider>
);

export default ContextProviders;
