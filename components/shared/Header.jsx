import React from "react";
import Div from "./Div";
import Mytext from "./CoustomText";
import { color } from "./color";

export default function Header({ heading, dis, icon }) {
  return (
    <Div
      className={` bg-[${color.bg2}] px-7 py-5 mt-10 mb-5 mx-3 rounded-2xl flex-row justify-between items-center `}
    >
      <Div>
        <Mytext className={" text-white text-xl "}>{heading}</Mytext>
        <Mytext className={` text-[${color.textGray}]`}>{dis}</Mytext>
      </Div>
      {icon}
    </Div>
  );
}
