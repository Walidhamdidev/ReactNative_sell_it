import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

interface Props {
  visible: boolean;
}

const ActivityIndicator = ({ visible }: Props) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottie}
        autoPlay
        loop
        source={require("../../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
    opacity: 0.8,
    paddingLeft: 40,
  },
  lottie: { width: "70%", height: "70%" },
});

export default ActivityIndicator;
