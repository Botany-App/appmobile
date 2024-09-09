import { View, Text } from "react-native";

export default function Home() {
  return (
    <View className={"flex-1 px-6 pt-24 bg-zinc-100"}>
      <View className={"flex justify-center"}>
        <Text className={"text-2xl mt-8 font-bold text-black"}>Home</Text>
      </View>
    </View>
  );
}
