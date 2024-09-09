import { View, Text, SafeAreaView, TextInput } from "react-native";

type TextFieldProps = {
  label: string;
  keyboardType: string;
  placeholder: string;
  error: string;
};

export default function TextField({ label, error, ...props }: TextFieldProps) {
  return (
    <View className={"flex gap-1  mt-2"}>
      <Text className={"mb-1 text-zinc-500"}>{label}*</Text>
      <SafeAreaView
        className={`border-2 border-gray-300 rounded-md p-2 focus:border-green-500 ${
          error && "border-red-500"
        }`}>
        <TextInput {...props} />
      </SafeAreaView>
    </View>
  );
}
