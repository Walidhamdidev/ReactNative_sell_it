import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingLeft: 10,
    paddingVertical: 9,
    backgroundColor: colors.light,
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    marginLeft: 5,
    fontSize: 14,
  },
});
