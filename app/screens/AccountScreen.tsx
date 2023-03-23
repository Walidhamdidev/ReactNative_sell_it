import { FlatList, StyleSheet, Text, View } from "react-native";
import Wrapper from "../components/Wrapper";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/Icon";
import routes from "../navigation/routes";

const listings = [
  { title: "My Listings", icon: "menu", color: colors.danger },
  {
    title: "My Messages",
    icon: "email",
    color: "blue",
    targetScreen: "Messages",
  },
];

interface Props {
  navigation: any;
}

const AccountScreen = ({ navigation }: Props) => {
  return (
    <Wrapper style={{ backgroundColor: colors.light }}>
      <ListItem
        renderRightActions={() => null}
        title="Mosh"
        subtitle="A software developer"
        image={require("../assets/mosh.jpg")}
        onPress={() => {}}
      />

      <FlatList
        style={{ marginVertical: 13 }}
        data={listings}
        keyExtractor={(listing) => listing.title}
        renderItem={({ item }) => (
          <ListItem
            onPress={() =>
              navigation.navigate(routes.MESSAGES, item.targetScreen)
            }
            title={item.title}
            IconComponent={
              <Icon
                name={item.icon}
                iconColor={colors.white}
                backgroundColor={item.color}
              />
            }
          />
        )}
      />

      <ListItem
        onPress={() => {
          console.log("Logout");
        }}
        title="Logout"
        IconComponent={
          <Icon
            name="logout"
            iconColor={colors.white}
            backgroundColor={colors.gold}
          />
        }
      />
    </Wrapper>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
