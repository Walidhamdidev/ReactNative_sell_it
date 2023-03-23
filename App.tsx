import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNoticeBar from "./app/components/OfflineNoticeBar";
import { useState } from "react";
import AuthContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNoticeBar />
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
        {/* <AppNavigator /> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
