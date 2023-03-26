import { StyleSheet, ImageBackground, View, Image } from "react-native";
import AppButton from "../components/Button";
import AppText from "../components/Text";
import routes from "../navigation/routes";

interface Props {
  navigation: any;
}

const WelcomeScreen = ({ navigation }: Props) => (
  <ImageBackground
    source={require("../assets/background.jpg")}
    style={styles.imageBackground}
  >
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppText style={styles.tagline}>Sell What You Don't Need</AppText>
    </View>

    <View style={styles.buttonsContainer}>
      <AppButton
        style={styles.loginButton}
        label="Login"
        onPress={() => navigation.navigate(routes.LOGIN)}
      />
      <AppButton
        style={styles.registerButton}
        label="Register"
        onPress={() => navigation.navigate(routes.REGISTER)}
      />
    </View>
  </ImageBackground>
);

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  tagline: {
    fontSize: 22,
    textAlign: "center",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 13,
  },

  loginButton: {
    backgroundColor: "#fc5c65",
    // width: "100%",
    // height: 70,
  },
  registerButton: {
    backgroundColor: "#4ecdc4",
    // width: "100%",
    // height: 70,
  },
});
