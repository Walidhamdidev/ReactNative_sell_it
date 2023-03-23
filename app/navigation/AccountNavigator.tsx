import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";
import routes from "./routes";

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ACCOUNT}
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={routes.MESSAGES} component={MessageScreen} />
    </Stack.Navigator>
  );
}
