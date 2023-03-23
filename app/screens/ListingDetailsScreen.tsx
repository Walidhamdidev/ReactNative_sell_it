import { Image, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

interface Props {
  route: any;
}

const ListingDetailsScreen = ({ route }: Props) => {
  const { title, image, price } = route?.params?.item;

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{`${price}`}</AppText>
      </View>
      <ListItem
        renderRightActions={() => null}
        title="Mosh"
        subtitle="A software developer"
        image={require("../assets/mosh.jpg")}
        onPress={() => {
          console.log("My name ");
        }}
      />
    </ScrollView>
  );
};
export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "500",
  },
  price: {
    color: colors.primary,
    marginVertical: 10,
  },
});
