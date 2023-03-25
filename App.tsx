import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNoticeBar from "./app/components/OfflineNoticeBar";
import { AuthContext } from "./app/auth/context";
import { useState } from "react";
import authStorage from "./app/auth/storage";
import AppLoading from "expo-app-loading";

export default function App() {
  const [user, setUser] = useState<{
    username: string;
    email: string;
    password: string;
  } | null>(null);

  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const userStored = (await authStorage.getUser()) as any;
    if (userStored) setUser(JSON.parse(userStored));
  };

  if (!isReady)
    <AppLoading
      autoHideSplash
      startAsync={restoreUser}
      onFinish={() => setIsReady(true)}
    />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNoticeBar />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
