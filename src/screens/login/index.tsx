import { Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { colors } from "constants/colors";
import SignInWithGoogleButton from "screens/login/components/SignInWithGoogleButton";
import Text from "components/atoms/text";
import LoginForm from "components/organisms/forms/LoginForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../../assets/images/welcome-screen-logo.png")}
          style={styles.image}
        />

        <LoginForm />

        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <SignInWithGoogleButton />

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerLink}>Sign up</Text>
          </Pressable>
        </View>
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
    marginHorizontal: 15,
    color: colors.textDisabled,
    fontSize: 12,
    fontWeight: "600",
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  registerLink: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default LoginScreen;
