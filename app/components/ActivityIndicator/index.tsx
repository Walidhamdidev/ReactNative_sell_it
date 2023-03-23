import LottieView from "lottie-react-native";
import { View } from "react-native";

interface Props {
  visible: boolean;
}

const ActivityIndicator = ({ visible }: Props) => {
  if (!visible) return null;
  return (
    <LottieView
      style={{ width: "70%", height: "70%" }}
      autoPlay
      loop
      source={require("../../assets/animations/loader.json")}
    />
  );
};

export default ActivityIndicator;
