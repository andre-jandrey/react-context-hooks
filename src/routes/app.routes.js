import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Lots from "../screens/Lots";

const AppStack = createStackNavigator();

const options = () => {
  return {
    headerShown: false,
    headerTintColor: "#000",
    headerBackTitleVisible: false,
    headerTitleStyle: {
      //fontFamily: 'AvenirNext-Regular',
      color: "#000",
    },
  };
};

const AppStackScreen = () => (
  <AppStack.Navigator mode="modal" screenOptions={options}>
    <AppStack.Screen
      name="Lots"
      component={Lots}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default AppStackScreen;
