import { FlatList, StyleSheet, View } from "react-native";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import api from "../api/listings";
import { useEffect, useState } from "react";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

interface Props {
  navigation: any;
}

const ListingsScreen = ({ navigation }: Props) => {
  const getListingApi = useApi(api.getListings);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    getListingApi.request();
    const allData = getListingApi.data as any;
    const listings: any = [];
    allData["data"].map((item: any) => {
      const obj = {
        id: item.id,
        title: item["attributes"]["title"],
        image: item["attributes"]["images"],
        price: item["attributes"]["price"],
      };
      listings.push(obj);
    });
    setData(listings);
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
        data={data}
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
