import { StyleSheet, View } from "react-native";
import Button from "components/atoms/button";
import { useForm } from "react-hook-form";
import { useLogin } from "api/hooks/auth";
import { LoginRequest } from "models/requests/LoginRequest";
import { FormInput } from "components/atoms/formInput";

const LoginForm = () => {
  const { mutate: login, isPending } = useLogin();
  const { control, handleSubmit } = useForm<LoginRequest>({
    defaultValues: {
      email: "a@as.a",
      password: "aaaaaa",
    },
  });

  const onSubmit = (values: LoginRequest) => {
    login(values);
  };

  return (
    <View style={styles.container}>
      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <FormInput
        control={control}
        name="password"
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
      />

      <Button
        variant="outlined"
        loadingText="Signing in..."
        title="Sign in"
        onPress={handleSubmit(onSubmit)}
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
