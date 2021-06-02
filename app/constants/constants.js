import { StatusBar, Dimensions } from "react-native";
export const STATUS = {
  delivred: "delivered",
  pending: "pending",
  canceled: "canceled",
  confirmed: "confirmed",
};
export const COLORS = {
  app1: "#02A69C",
  app2: "#E5E5E5",
  app3: "#02243D",
  green: "#04C0B5",
  grey: "#666",
  red: "#F45B5B",
  yellow: "#FFB802",
};

export const screenOptions = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: ({ current, layouts }) => {
    const translateX = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [layouts.screen.width, 0],
    });

    return {
      cardStyle: {
        transform: [{ translateX }],
      },
    };
  },
};

export const DIMENSIONS = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height - StatusBar.currentHeight || 0,
};
