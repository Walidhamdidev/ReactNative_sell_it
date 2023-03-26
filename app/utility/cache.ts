import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import logger from "./logger";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key: string, value: string) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    logger.log(error);
  }
};

const isExpired = (item: any) => {
  const now = dayjs(Date.now());
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};

const get = async (key: string) => {
  try {
    const value = (await AsyncStorage.getItem(prefix + key)) as string;
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
  } catch (error) {
    logger.log(error);
  }
};

export default {
  get,
  store,
};
