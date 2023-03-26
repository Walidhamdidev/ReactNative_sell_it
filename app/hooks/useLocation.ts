import { useState, useEffect } from "react";
import * as Location from "expo-location";
import logger from "../utility/logger";

export default function useLocation() {
  const [location, setLocation] = useState<any>();

  const getUserLocation = async () => {
    try {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (!granted) return;

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      setLocation({ latitude, longitude });
    } catch (error) {
      logger.log(error);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return location;
}
