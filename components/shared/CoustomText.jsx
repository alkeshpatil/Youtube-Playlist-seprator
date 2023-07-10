import { Text } from "react-native";
import tw from "twrnc";
import React from "react";

export default function Mytext({ className, children, ...rest }) {
  return (
    <Text style={tw`text-white ${className}`} {...rest}>
      {children}
    </Text>
  );
}
