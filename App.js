import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {}
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App style={{ flex: 1 }} />
    </BlogProvider>
  );
};
