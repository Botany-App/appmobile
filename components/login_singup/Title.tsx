import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

type TitleProps = {
  title: string;
  subtitle: string;
  back: () => void;
};

export default function Title({ title, subtitle, back }: TitleProps) {
  return (
    <View>
      <View className={"flex justify-center"}>
        <AntDesign name="arrowleft" size={32} color="black" onPress={back} />
      </View>
      <View className={"flex"}>
        <Text className={"text-2xl font-semibold mt-8"}>{title}</Text>
        <Text className={"text-zinc-400 mt-1"}>{subtitle}</Text>
      </View>
    </View>
  );
}
