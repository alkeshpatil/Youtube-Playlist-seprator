import React from "react";
import Div from "./Div";
import Mytext from "./CoustomText";
import { color } from "./color";
import { ChevronRightIcon } from "react-native-heroicons/outline";

export default function SavedTiele({ name, dis }) {
  return (
    <Div className={"flex-row justify-between items-center mx-3 px-5 mb-5 "}>
      <Div className={"flex-row items-center "}>
        <Div
          className={` h-14 w-14  bg-[${color.primary}] rounded-xl mr-5 `}
        ></Div>
        <Div className={""}>
          <Mytext className={"text-xl "}>{name}</Mytext>
          <Mytext className={`text-[${color.textGray}] `}>{dis}</Mytext>
        </Div>
      </Div>
      <ChevronRightIcon strokeWidth={1} color={color.bg2} size={30} />
    </Div>
  );
}
