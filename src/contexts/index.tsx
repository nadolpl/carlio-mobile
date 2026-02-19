import { PropsWithChildren } from "react";
import QueryProvider from "contexts/QueryContext";
import { AuthProvider } from "contexts/AuthContext";

const ContextProviders = ({ children }: PropsWithChildren) => (
  <AuthProvider>
    <QueryProvider>{children}</QueryProvider>
  </AuthProvider>
);

export default ContextProviders;
