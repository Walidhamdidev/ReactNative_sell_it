import { StyleSheet } from "react-native";
import colors from "../../config/colors";
export default StyleSheet.create({
  button: {
    alignSelf: "center",
    width: "100%",
    marginTop: 15,
    paddingVertical: 10,
    backgroundColor: colors.danger,
    borderRadius: 50,
    borderColor: "red",
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
  },
});
