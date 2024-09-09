import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className={"flex-1 bg-zinc-100"}>
      <View className="flex justify-center items-center gap-6 h-3/4 px-4">
        <View className={"flex flex-row items-center  justify-center mb-12"}>
          <Image
            className={"w-8 h-8 -ml-4"}
            source={require("../assets/images/logo_sem_fundo.png")}
          />
          <Text className={"-ml-1 text-green-900 text-base"}>Botany</Text>
        </View>

        <Image
          className={"w-[312] h-[312] -mb-4"}
          source={require("../assets/images/seeding.png")}
        />
        <Text className={"text-2xl font-semibold -mb-3"}>
          <Text className={"text-green-500 underline "}>Tecnologia</Text> para
          sua horta!
        </Text>
        <Text className={"text-zinc-400 text-center"}>
          Gerencie de forma fácil e prática, com diagnósticos e recomendações de
          cultivo.
        </Text>
      </View>
      <View className={"flex items-center justify-center gap-8 h-1/4"}>
        <View
          className={
            "h-14 w-2/3 bg-green-500 flex items-center justify-center rounded-md"
          }>
          <Link href={"/login"}>
            <TouchableOpacity
              className={
                "w-full h-full bg-green-500 flex items-center justify-center rounded-md"
              }>
              <Text className={"text-zinc-100 text-base font-semibold"}>
                Já possui uma conta?
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
        <Link href={"/signUp"} className={"font-semibold underline"}>
          Crie um conta!
        </Link>
      </View>
    </View>
  );
}
