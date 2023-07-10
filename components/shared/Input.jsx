import { TextInput } from "react-native";
import tw from "twrnc";
import { color } from "./color";

export default function Input({ className, ...rest }) {
  return (
    <TextInput
      style={tw`w-full bg-[${color.bg2}] text-white p-3 rounded-xl text-sm  ${className}`}
      {...rest}
    />
  );
}
