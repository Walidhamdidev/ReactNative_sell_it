import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeUser = async (authUser: string) => {
  try {
    await SecureStore.setItemAsync(key, authUser);
  } catch (error) {
    console.log("Error store user", error);
  }
};

const getUser = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting user", error);
  }
};

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing user", error);
  }
};

export default {
  storeUser,
  getUser,
  removeUser,
};
