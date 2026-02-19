import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "constants/colors";
import LoginForm from "screens/login/components/LoginForm";
import SignInWithGoogleButton from "screens/login/components/SignInWithGoogleButton";
import Text from "components/atoms/text";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../../assets/images/login-screen-logo.png")}
          style={styles.image}
        />
        <LoginForm />

        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <SignInWithGoogleButton />
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
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.divider,
  },
  orText: {
    marginHorizontal: 10,
    color: colors.textDisabled,
    fontSize: 12,
  },
});

export default LoginScreen;
