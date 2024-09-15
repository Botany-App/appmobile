import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsRoutes() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#22c55e",
        tabBarInactiveTintColor: "#a1a1aa",
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks/index"
        options={{
          title: "Tarefas",
          tabBarIcon: ({ color }) => (
            <Octicons name="tasklist" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="garden/index"
        options={{
          title: "Horta",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sprout" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="diagnosis/index"
        options={{
          title: "Diagnóstico",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="camera" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
