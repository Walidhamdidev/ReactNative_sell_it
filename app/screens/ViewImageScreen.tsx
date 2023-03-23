import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => (
  <View style={styles.container}>
    <View style={styles.choseIcon}>
      <MaterialCommunityIcons name="close" size={35} />
    </View>
    <View style={styles.deleteIcon}>
      <MaterialCommunityIcons name="trash-can-outline" size={35} />
    </View>

    <Image
      resizeMode="contain"
      style={styles.image}
      source={require("../assets/chair.jpg")}
    />
  </View>

  // lean
);

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  choseIcon: {
    borderRadius: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },

  image: {
    marginTop: 50,
    width: "100%",
    height: "100%",
  },
});
