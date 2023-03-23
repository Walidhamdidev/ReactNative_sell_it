import { FlatList, StyleSheet, View } from "react-native";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import api from "../api/listings";
import { useEffect } from "react";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

interface Props {
  navigation: any;
}

const ListingsScreen = ({ navigation }: Props) => {
  const getListingApi = useApi(api.getListings);
  useEffect(() => {
    getListingApi.request();
  }, []);

  return (
    <Wrapper style={styles.container}>
      {getListingApi.error && (
        <View style={styles.noDataContainer}>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton label="Retry" onPress={getListingApi.request} />
        </View>
      )}
      {getListingApi.loading && (
        <View style={styles.noDataContainer}>
          <ActivityIndicator visible={getListingApi.loading} />
        </View>
      )}
      <FlatList
        data={getListingApi.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Card
              onPress={() =>
                navigation.navigate(routes.LISTING_DETAILS, { item })
              }
              image={item.image}
              title={item.title}
              subtitle={`$${item.price}`}
            />
          );
        }}
      />
    </Wrapper>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
  },
  noDataContainer: {
    paddingHorizontal: 20,
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
