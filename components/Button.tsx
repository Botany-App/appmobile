import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
  children: string;
  disabled?: boolean;
  onPress: () => void;
};

export default function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      className={
        "h-14 w-full mt-6 bg-green-500 flex items-center justify-center rounded-md"
      }>
      <Text className={"text-zinc-100 text-base font-semibold"}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
