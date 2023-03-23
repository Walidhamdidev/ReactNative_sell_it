import { Image, ImageSourcePropType, View } from "react-native";
import AppText from "../Text";
import styles from "./styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

const Card = ({ image, title, subtitle, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.card}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.detailsContainer}>
        <AppText numberOfLines={1} style={styles.title}>
          {title}
        </AppText>
        <AppText numberOfLines={1} style={styles.subtitle}>
          {subtitle}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
