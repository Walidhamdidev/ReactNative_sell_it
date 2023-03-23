import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, TextInputProps } from "react-native";

import styles from "./styles";
import defaultStyles from "../../../config/styles";

interface Props extends TextInputProps {
  icon?: any;
  width?: number | string;
}

const AppTextInput = ({ icon, width = "100%", ...otherProps }: Props) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={defaultStyles.colors.secondary}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;
