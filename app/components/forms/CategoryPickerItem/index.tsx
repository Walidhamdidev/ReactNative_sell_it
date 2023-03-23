import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "../../Text";
import Icon from "../../Icon";

interface Props {
  item: { label: string; backgroundColor: string; icon: any };
  onPress: () => void;
}

const CategoryPickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon size={60} name={item.icon} backgroundColor={item.backgroundColor} />
      <AppText style={styles.text}> {item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
  },
});

export default CategoryPickerItem;
