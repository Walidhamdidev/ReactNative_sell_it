import {
  Image,
  ImageSourcePropType,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../Text";
import styles from "./styles";
import colors from "../../../config/colors";

interface Props {
  title: string;
  subtitle?: string;
  image?: ImageSourcePropType;
  onPress: () => void;
  renderRightActions?: () => any;
  IconComponent?: any;
}

const ListItem = ({
  title,
  subtitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}: Props) => (
  <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.userContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          {subtitle && (
            <AppText numberOfLines={2} style={styles.subtitle}>
              {subtitle}
            </AppText>
          )}
        </View>
        <MaterialCommunityIcons name="chevron-right" size={25} />
      </View>
    </TouchableHighlight>
  </Swipeable>
);

export default ListItem;
