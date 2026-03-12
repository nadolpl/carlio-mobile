import RegisterForm from "components/organisms/forms/RegisterForm";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../../assets/images/welcome-screen-logo.png")}
          style={styles.image}
        />
        <RegisterForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 60,
    paddingHorizontal: 40,
    alignItems: "center",
    paddingBottom: 40,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
  },
});

export default RegisterScreen;
