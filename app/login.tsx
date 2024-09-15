import Title from "@/components/login_singup/Title";
import TextField from "@/components/TextField";
import AntDesign from "@expo/vector-icons/AntDesign";

import { useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { z } from "zod";
import handleLogin from "@/use-cases/handle_login";
import Button from "@/components/Button";

export default function Login() {
  const back = () => {
    router.back();
  };
  const formSchema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  });
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      formSchema.parse(values);
      setLoading(true);

      const response = await handleLogin(values);
      setLoading(false);

      if (!response) {
        Alert.alert("Erro");
        return;
      }

      router.push("/(app)/home");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: any = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <View className={"flex-1 px-6 pt-24 bg-zinc-100"}>
      <Title
        title="Bem-vindo de volta!"
        subtitle="Faça login para continuar"
        back={back}
      />
      <View className="flex mt-4">
        <TextField
          label="E-mail"
          placeholder="E-mail"
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
          error={errors.email}
        />

        <TextField
          label="Senha"
          placeholder="Senha"
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
          error={errors.password}
        />
        <Text
          className={"ml-1 mt-2 text-zinc-500"}
          onPress={() => router.replace("/")}>
          Esqueceu a senha? <Text className="text-green-500">Clique aqui</Text>
        </Text>

        <Button onPress={handleSubmit} disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </Button>
      </View>

      <View className="flex flex-row justify-center mt-4">
        <Text className="text-zinc-400">Não tem uma conta? </Text>
        <Text
          className="text-green-500"
          onPress={() => router.replace("/signUp")}>
          Cadastre-se
        </Text>
      </View>

      <View>
        <View className="flex flex-row gap-2 justify-center items-center mt-12">
          <View className="h-[0.75] w-1/3 bg-green-950 "></View>
          <Text className="text-zinc-400 mt-4 text-center">Ou entre com</Text>
          <View className="h-[0.75] w-1/3 bg-green-950 "></View>
        </View>
        <TouchableOpacity className="flex flex-row px-12 items-center mt-8 text-2xl rounded-md bg-zinc-200 h-14 mx-2">
          <AntDesign name="google" size={24} color="black" />
          <Text className="ml-4 text-base">Entre com sua conta google!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
