import { Text, TextProps } from "react-native";
import defaultStyles from "../../config/styles";
import { ReactNode } from "react";

interface Props extends TextProps {
  children: ReactNode;
  style?: {};
}

const AppText = ({ children, style, ...otherProps }: Props) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
