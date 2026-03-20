import FormInput from "components/atoms/formInput";
import { useForm } from "react-hook-form";
import { RegisterFormInput, RegisterFormOutput, registerSchema } from "validation/registerSchema";
import { useRegister } from "api/hooks/auth";
import { RegisterRequest } from "models/requests/RegisterRequest";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "components/atoms/button";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const RegisterForm = () => {
  const { mutate: register, isPending } = useRegister();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<RegisterFormInput, any, RegisterFormOutput>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = (req: RegisterRequest) => {
    register(req, {
      onSuccess: () => {
        navigation.goBack();
        Toast.show({
          text1: "Activation link was send to your e-mail",
        });
      },
    });
  };

  return (
    <View style={styles.container}>
      <FormInput
        control={control}
        name="email"
        label="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />

      <FormInput control={control} name="firstName" label="First Name" autoCapitalize="words" />

      <FormInput control={control} name="lastName" label="Last Name" autoCapitalize="words" />

      <FormInput
        control={control}
        name="password"
        label="Password"
        secureTextEntry
        textContentType="newPassword"
      />

      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        secureTextEntry
        textContentType="newPassword"
      />

      <Button
        variant="outlined"
        loadingText="Creating account..."
        title="Sign up"
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

export default RegisterForm;
