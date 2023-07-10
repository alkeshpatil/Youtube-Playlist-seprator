import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/screen/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import YtScreen from "./components/screen/Ytscreen";
import Saved from "./components/screen/Saved";
import { BookmarkIcon, HomeIcon } from "react-native-heroicons/outline";

import { color as Color } from "./components/shared/color";
import { tw } from "twrnc";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,

            tabBarStyle: {
              height: 60,
              borderColor: Color.bg,
              backgroundColor: Color.bg,
              elevation: 0,
              borderTopColor: Color.bg2,
              paddingBottom: 10,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let IconName;
              let rn = route.name;
              if (rn === "Home") {
                IconName = focused ? (
                  <HomeIcon strokeWidth={1} color={Color.primary} size={30} />
                ) : (
                  <HomeIcon strokeWidth={1} color={Color.bg2} size={30} />
                );
              } else if (rn === "Save") {
                IconName = focused ? (
                  <BookmarkIcon
                    strokeWidth={1}
                    color={Color.primary}
                    size={30}
                  />
                ) : (
                  <BookmarkIcon strokeWidth={1} color={Color.bg2} size={30} />
                );
              }
              return IconName;
            },
          })}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Save"
            component={Saved}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
