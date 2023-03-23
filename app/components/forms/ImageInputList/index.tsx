import { useRef } from "react";
import ImageInput from "../ImageInput";
import { ScrollView, View, StyleSheet } from "react-native";

interface Props {
  imageUris: string[];
  onAdd: (uri: string) => void;
  onRemove: (uri: string) => void;
}

const ImageInputList = ({ imageUris = [], onAdd, onRemove }: Props) => {
  const scrollView = useRef<any>();

  return (
    <ScrollView
      horizontal
      ref={scrollView}
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <View key={uri} style={styles.image}>
            <ImageInput image={uri} onChange={() => onRemove(uri)} />
          </View>
        ))}
        <ImageInput onChange={(uri) => onAdd(uri)} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
