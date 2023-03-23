import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import AppText from "../Text";
import styles from "./styles";

interface Props {
  onPress: () => void;
  item: any;
}

const PickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
