import { Alert } from "react-native";
import Button from "components/atoms/button";
import { ICONS } from "constants/icons";
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { requestGoogleLogin } from "api/requests/auth";
import { useState } from "react";
import { useAuth } from "contexts/AuthContext";

GoogleSignin.configure({
  iosClientId: process.env.EXPO_PUBLIC_IOS_GOOGLE_CLIENT_ID,
  webClientId: process.env.EXPO_PUBLIC_WEB_GOOGLE_CLIENT_ID,
  scopes: ["profile", "email"],
});

const SignInWithGoogleButton = () => {
  const { authorize } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleError = (error: unknown) => {
    if (isErrorWithCode(error)) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) return;
      if (error.code === statusCodes.IN_PROGRESS) return;

      const message =
        error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
          ? "Google Play Services are not available"
          : error.message;

      Alert.alert("Sign in error", message);
    } else {
      Alert.alert("Error", "Unexpected error occurred.");
    }
  };

  const signIn = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      await GoogleSignin.hasPlayServices();
      const { data } = await GoogleSignin.signIn();

      if (data?.idToken) {
        const tokens = await requestGoogleLogin({
          idToken: data.idToken,
        });
        await authorize(tokens);
      }
    } catch (error) {
      handleGoogleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outlined"
      loading={isLoading}
      loadingText="Signing in..."
      title="Sign in with google"
      onPress={signIn}
      icon={ICONS.GOOGLE}
    />
  );
};

export default SignInWithGoogleButton;
