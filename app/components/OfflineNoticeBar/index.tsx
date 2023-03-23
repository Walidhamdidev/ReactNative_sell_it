import { Platform, StyleSheet, StatusBar, View } from "react-native";
import Text from "../Text";
import colors from "../../config/colors";

import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNoticeBar = () => {
  const infoNet = useNetInfo();

  if (infoNet.type !== "unknown" && infoNet.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    position: "absolute",
    zIndex: 1,
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: 40,
  },
  text: {
    color: colors.light,
    fontSize: 14,
  },
});

export default OfflineNoticeBar;
