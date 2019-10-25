import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CreateScreen from "./src/screens/CreateScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
    Create: CreateScreen
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
