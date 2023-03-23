import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  userContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: colors.primary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.secondary,
  },
});
