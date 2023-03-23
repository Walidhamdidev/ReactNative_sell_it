import {
  Text,
  TouchableHighlight,
  TouchableHighlightComponent,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../../config/colors";
interface Props {
  onPress: () => void;
  label: string;
  style?: {};
  textStyle?: {};
}

const AppButton = ({ onPress, label, style, textStyle }: Props) => {
  return (
    <TouchableHighlight
      style={[styles.button, style]}
      underlayColor={"red"}
      onPress={onPress}
    >
      <Text style={[styles.title, textStyle]}>{label.toUpperCase()}</Text>
    </TouchableHighlight>
  );
};

export default AppButton;
