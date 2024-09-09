import { View, Text, Alert, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import { z } from "zod";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import HandlePostUser from "@/use-cases/handler_post_user";

export default function SignUp() {
  const back = () => {
    router.back();
  };
  const [isChecked, setIsChecked] = useState(false);
  const signUpSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  });

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = async () => {
    try {
      if (!isChecked) {
        Alert.alert("Você precisa concordar com os termos de uso");
        return;
      }
      signUpSchema.parse(formValues);

      setLoading(true);

      const response = await HandlePostUser(formValues);
      setLoading(false);

      if (!response) {
        Alert.alert("Erro");
        return;
      }

      router.replace("./emailValidation");
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
      <View className={"flex justify-center"}>
        <AntDesign name="arrowleft" size={32} color="black" onPress={back} />
      </View>
      <View className={"flex"}>
        <Text className={"text-2xl font-semibold mt-8"}>Crie sua conta</Text>
        <Text className={"text-zinc-400 mt-1"}>
          Preencha os campos abaixo para criar sua conta.
        </Text>
      </View>

      <View className={"flex mt-4"}>
        <TextField
          label="Nome"
          placeholder="Digite seu nome"
          onChangeText={(text) => handleChange("name", text)}
          error={errors.name}
        />
        {errors.name && <Text style={{ color: "red" }}>{errors.name}</Text>}
        <TextField
          label="E-mail"
          placeholder="Digite seu e-mail"
          onChangeText={(text) => handleChange("email", text)}
          error={errors.email}
        />
        {errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}

        <TextField
          label="Senha"
          placeholder="Digite sua senha"
          onChangeText={(text) => handleChange("password", text)}
          error={errors.password}
          secureTextEntry
        />
        {errors.password && (
          <Text style={{ color: "red" }}>{errors.password}</Text>
        )}
        <View className={"flex flex-row items-center justify-center ml-3 mt-4"}>
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "#22c55e" : undefined}
            className={"mr-2 w-4 h-4"}
          />
          <Text className={"text-zinc-400 text-xs  "}>
            Ao clicar em cadastrar você concorda com os nossos{" "}
            <Text className={"text-green-500"}>Termos de uso</Text> e{" "}
            <Text className={"text-green-500"}>Política de privacidade</Text>
          </Text>
        </View>
        <Button onPress={handleSubmit}>
          {loading ? "Carrengando..." : "Cadastrar"}
        </Button>
      </View>
      <View>
        <Text
          className={"text-zinc-400 mt-4 text-center"}
          onPress={() => router.replace("../login")}>
          Já tem uma conta? <Text className={"text-green-500"}>Faça login</Text>
        </Text>
      </View>
      <View>
        <View
          className={"flex flex-row gap-2 justify-center items-center mt-12"}>
          <View className={"h-[0.75] w-1/3 bg-green-950 "}></View>
          <Text className={"text-zinc-400 mt-4 text-center"}>Ou entre com</Text>
          <View className={"h-[0.75] w-1/3 bg-green-950 "}></View>
        </View>
        <TouchableOpacity
          className={
            "flex flex-row px-12  items-center mt-8 text-2xl rounded-md bg-zinc-200 h-14 mx-2"
          }>
          <AntDesign name="google" size={24} color="black" />
          <Text className={"ml-4  text-base"}>Entre com sua conta google!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
