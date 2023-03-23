import { TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../config/colors";
import styles from "./styles";

interface Props {
  onPress: (message: any) => void;
}

const ListItemDeleteAction = ({ onPress }: Props) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <MaterialCommunityIcons
        color={colors.white}
        name="trash-can-outline"
        size={35}
      />
    </View>
  </TouchableWithoutFeedback>
);

export default ListItemDeleteAction;
