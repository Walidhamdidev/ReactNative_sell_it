import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
