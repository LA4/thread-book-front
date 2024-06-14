import { Tabs } from "expo-router";
import { ReactElement } from "react";
import { View, Text } from "react-native";

type PropsTabIcon = {
  name: string,
  color?: string,
  focused?: boolean,
  icon?: string
}

const TabIcon = ({ name, color, focused, icon }: PropsTabIcon): ReactElement => {
  return (
    <View>
      <Text style={{ color: `${focused ? "blue" : ""}` }}>{name}</Text>
    </View>)
}

export default function TabLayout() {

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false
        }}
      >
        <Tabs.Screen
          name="home"
          options={
            {
              title: "Home",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="home" focused={focused} />
              )

            }

          }
        />
        <Tabs.Screen
          name="addBooks"
          options={
            {
              title: "AddBooks",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="Add" focused={focused} />
              )

            }

          }
        />
        <Tabs.Screen
          name="actualRead"
          options={
            {
              title: "actualRead",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="actualRead" focused={focused} />
              )

            }

          }
        />
      </Tabs>
    </>
  );
}
