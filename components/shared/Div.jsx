import { View } from "react-native";
import tw from "twrnc";

export default function Div({ className, children, ...rest }) {
  return (
    <View style={tw`${className}`} {...rest}>
      {children}
    </View>
  );
}
