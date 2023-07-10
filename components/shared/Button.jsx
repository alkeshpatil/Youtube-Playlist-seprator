import { Pressable } from "react-native";
import tw from "twrnc";
import Mytext from "./CoustomText";
import { color } from "./color";

export default function Btn({ className, children, ...rest }) {
  return (
    <Pressable
      style={tw` bg-[${color.primary}] text-white p-3 flex justify-center items-center rounded-lg ${className}`}
      {...rest}
    >
      <Mytext className={"text-white text-xl "}>{children}</Mytext>
    </Pressable>
  );
}
