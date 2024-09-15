import { View, Text, SafeAreaView, TextInput } from "react-native";

type TextFieldProps = {
  label: string;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "url";
  placeholder: string;
  error: string | null | undefined;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
};

export default function TextField({
  label,
  error,
  keyboardType = "default",
  placeholder,
  secureTextEntry = false,
  onChangeText,
}: TextFieldProps) {
  return (
    <View className="flex mt-2">
      <Text className="mb-1 text-zinc-500">{label}*</Text>
      <SafeAreaView
        className={`border-2 border-gray-300 rounded-md p-2 ${
          error ? "border-red-500" : "focus:border-green-500"
        }`}>
        <TextInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
      </SafeAreaView>
      {error ? <Text className="text-red-500 text-xs">{error}</Text> : null}
    </View>
  );
}
