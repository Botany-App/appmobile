import { View, Text, TextInput, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState } from "react";
import Button from "@/components/Button";
import handleValidationEmail from "@/use-cases/handle_validation_email";
import Title from "@/components/login_singup/Title";
export default function EmailValidation() {
  const back = () => {
    router.replace("/signUp");
  };
  const [codeValues, setCodeValues] = useState({
    n1: "",
    n2: "",
    n3: "",
    n4: "",
  });

  const [errors, setErrors] = useState({ n1: "", n2: "", n3: "", n4: "" });
  const handleChange = (field: string, value: string) => {
    setCodeValues((prev) => ({ ...prev, [field]: value }));
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await handleValidationEmail(codeValues);
      setLoading(false);
      if (!response) {
        router.replace("../");
        Alert.alert("Código de validação inválido");
        return;
      }
      router.replace("../aplication");
    } catch (error) {
      setLoading(false);
      Alert.alert("error");
    }
  };

  const handleCode = () => {
    Alert.alert("Código reenviado");
  };
  return (
    <View className={"flex-1 px-6 pt-24 bg-zinc-100"}>
      <Title
        title="Insira o código de validação!"
        subtitle="Enviamos um código de validação para o seu e-mail. Insira o código abaixo para validar sua conta."
        back={back}
      />
      <View className={"flex flex-row gap-x-5 justify-between mt-16"}>
        <TextInput
          placeholder="0"
          onChangeText={(text) => handleChange("n1", text)}
          value={codeValues.n1}
          keyboardType="number-pad"
          maxLength={1}
          className={
            "border-2 border-zinc-300 rounded-md w-16 h-16 focus-visible:bg-green-500/75 placeholder:text-center placeholder:text-xl "
          }
        />
        <TextInput
          placeholder="0"
          onChangeText={(text) => handleChange("n2", text)}
          value={codeValues.n2}
          keyboardType="number-pad"
          maxLength={1}
          className={
            "border-2 border-zinc-300 rounded-md w-16 h-16 focus-visible:bg-green-500/75 placeholder:text-center placeholder:text-xl "
          }
        />
        <TextInput
          placeholder="0"
          onChangeText={(text) => handleChange("n3", text)}
          value={codeValues.n3}
          keyboardType="number-pad"
          maxLength={1}
          className={
            "border-2 border-zinc-300 rounded-md w-16 h-16 focus-visible:bg-green-500/75 placeholder:text-center placeholder:text-xl "
          }
        />
        <TextInput
          placeholder="0"
          onChangeText={(text) => handleChange("n4", text)}
          value={codeValues.n4}
          keyboardType="number-pad"
          maxLength={1}
          className={
            "border-2 border-zinc-300 rounded-md w-16 h-16 focus-visible:bg-green-500/75 placeholder:text-center placeholder:text-xl "
          }
        />
      </View>
      <View>
        <Text className={"text-zinc-400 mt-4"} onPress={handleCode}>
          Não recebeu o código?{" "}
          <Text className={"text-green-500"}>Reenviar código</Text>
        </Text>
      </View>
      <View className={"mt-4"}>
        <Button onPress={handleSubmit}>
          {loading ? "Carrengando..." : "Validar"}
        </Button>
      </View>
      <View>
        <Text
          className={"text-zinc-400 mt-4 text-center"}
          onPress={() => router.replace("/login")}>
          Já tem uma conta? <Text className={"text-green-500"}>Faça login</Text>
        </Text>
      </View>
      <View className={"flex-1 justify-end mb-4"}>
        <Text className={"text-zinc-400 text-center"}>Botany, 2024</Text>
        <Text className={"text-zinc-400 text-center"}>
          Todos os direitos reservados
        </Text>
      </View>
    </View>
  );
}
