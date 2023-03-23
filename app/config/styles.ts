import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        color: colors.secondary,
      },
      android: {
        color: colors.primary,
      },
    }),
  },
};
