import * as SecureStore from "expo-secure-store";
import logger from "../utility/logger";

const key = "authToken";

const storeUser = async (authUser: string) => {
  try {
    await SecureStore.setItemAsync(key, authUser);
  } catch (error) {
    logger.log("Error store user " + error);
  }
};

const getUser = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    logger.log("Error getting user " + error);
  }
};

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    logger.log("Error removing user "+error);
  }
};

export default {
  storeUser,
  getUser,
  removeUser,
};
