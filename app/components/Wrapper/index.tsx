import { SafeAreaView } from "react-native";
import { ReactNode } from "react";
import styles from "./styles";

interface Props {
  children: ReactNode;
  style?: {};
}

const Wrapper = ({ children, style }: Props) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Wrapper;
