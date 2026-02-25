import FormInput from "components/atoms/formInput";
import { useForm } from "react-hook-form";
import { LoginFormInput, LoginFormOutput, loginSchema } from "validation/loginSchema";
import { useLogin } from "api/hooks/auth";
import { LoginRequest } from "models/requests/LoginRequest";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "components/atoms/button";
import { StyleSheet, View } from "react-native";

const LoginForm = () => {
  const { mutate: login, isPending } = useLogin();
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<LoginFormInput, any, LoginFormOutput>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (req: LoginRequest) => {
    login(req);
  };

  return (
    <View style={styles.container}>
      <FormInput control={control} name="email" label="Email" keyboardType="email-address" />
      <FormInput control={control} name="password" label="Password" secureTextEntry />

      <Button
        variant="outlined"
        loadingText="Signing in..."
        title="Sign in"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid || !isDirty}
        loading={isPending}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default LoginForm;
