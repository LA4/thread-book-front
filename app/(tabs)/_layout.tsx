import TreadHeader from "@/components/header/TreadHeader";
import { Tabs } from "expo-router";
import { ReactElement } from "react";
import { View, Text, Image } from "react-native";
import image from '@/constants/images'
import { Dimensions } from "react-native";
type PropsTabIcon = {
  name: string,
  color?: string,
  focused?: boolean,
  icon?: string
}
const windowWidth = Dimensions.get('window').width;

const TabIcon = ({ name, color, focused, icon }: PropsTabIcon): ReactElement => {
  return (
    <View style={{ width: windowWidth / 3, height: 50, alignItems: "center", justifyContent: "center", gap: 5 }}>
      {name === 'home' && <Image source={image.home} resizeMode="contain" style={{ width: 38, height: 30, }} ></Image>}
      {name === 'Add' && <Image source={image.add} resizeMode="contain" style={{ width: 38, height: 30 }}  ></Image>}
      {name === 'actualRead' && <Image source={image.actualRead} resizeMode="contain" style={{ width: 38, height: 30 }}></Image>}
      <Text style={{ color: `${focused ? "#3C3D34" : "#BFBFAA"}`, fontSize: 14 }}>{name}</Text>
    </View>)
}

export default function TabLayout() {

  return (
    <>
      <TreadHeader />

      <Tabs
        screenOptions={{
          tabBarShowLabel: false, tabBarStyle: {
            height: 60,
            paddingBottom: "5%",
            paddingTop: "5%",
          }
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
