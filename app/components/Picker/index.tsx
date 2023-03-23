import { FlatList, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles";
import AppText from "../Text";
import styles from "./styles";
import { useState } from "react";
import { Modal } from "react-native";
import PickerItem from "../PickerItem";
import colors from "../../config/colors";
import AppButton from "../Button";

interface Props {
  icon?: any;
  otherProps?: any;
  placeholder: string;
  items: { label: string; value: number }[];
  selectedItem: { label: string; value: number };
  onSelectItem: (item: { label: string; value: number }) => void;
  numColumns: number;
  width?: number | string;
  AppPickerComponent?: any;
}

const AppPicker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  numColumns,
  width = "100$",
  AppPickerComponent = PickerItem,
}: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={[styles.container, { width }]}>
          <View style={styles.content}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={24}
                color={defaultStyles.colors.secondary}
              />
            )}
            {selectedItem ? (
              <AppText style={styles.text}>{selectedItem.label}</AppText>
            ) : (
              <AppText style={styles.placeholder}>{placeholder}</AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={defaultStyles.colors.secondary}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <>
          <AppButton
            style={{
              borderRadius: 0,
              backgroundColor: colors.primary,
              marginBottom: 5,
            }}
            textStyle={{
              fontSize: 14,
            }}
            label="Close"
            onPress={() => setVisible(false)}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            renderItem={({ item }) => (
              <AppPickerComponent
                item={item}
                onPress={() => {
                  onSelectItem(item);
                  setVisible(false);
                }}
              />
            )}
          />
        </>
      </Modal>
    </>
  );
};

export default AppPicker;
