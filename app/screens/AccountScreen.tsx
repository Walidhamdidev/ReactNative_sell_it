import { FlatList, StyleSheet, Text, View } from "react-native";
import Wrapper from "../components/Wrapper";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import authStorage from "../auth/storage";
import { useAuth } from "../hooks/useAuth";

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
  const { user, logOut } = useAuth();

  return (
    <Wrapper style={{ backgroundColor: colors.light }}>
      <ListItem
        renderRightActions={() => null}
        title={user?.username ?? "username"}
        subtitle={user?.email ?? "email@exmple.com"}
        image={require("../assets/user_profile.webp")}
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
        onPress={() => logOut()}
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
