import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  card: {
    // padding: 20,
    margin: 10,
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: {
    width: 300,
    height: 150,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
    color: colors.primary,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
