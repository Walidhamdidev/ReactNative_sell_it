import {
  Alert,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../../../config/colors";

interface Props {
  image?: string;
  onChange: (uri: string) => void;
}

const ImageInput = ({ image, onChange }: Props) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("Please make you that have accepted the permission");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const launchMedia = async () => {
    if (image) {
      return Alert.alert(
        "Remove image",
        "Are you sure you want to remove the image?",
        [
          { text: "Yes", onPress: () => onChange("") },
          { text: "No", onPress: () => {} },
        ]
      );
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.canceled) onChange(result.assets[0].uri);
  };

  const handleOnPress = () => {
    launchMedia();
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <ImageBackground style={styles.container} source={{ uri: image }}>
        {!image && <MaterialCommunityIcons name="camera" size={30} />}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default ImageInput;
