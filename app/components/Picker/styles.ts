import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 9,
    flexDirection: "row",
    backgroundColor: colors.light,
    justifyContent: "space-between",
    marginVertical: 20,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    marginLeft: 4,
    color: colors.primary,
  },
  placeholder: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: "300",
  },
});
