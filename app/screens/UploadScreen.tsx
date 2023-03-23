import { Modal, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

import * as Progress from "react-native-progress";
import colors from "../config/colors";

interface Props {
  visible?: boolean;
  progress?: number;
  onDone: () => void;
}

const UploadScreen = ({ onDone, visible = false, progress = 0 }: Props) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={colors.danger} progress={progress} />
        ) : (
          <LottieView
            style={styles.animation}
            loop={false}
            autoPlay
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
