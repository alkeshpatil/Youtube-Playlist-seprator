import { View, Text, FlatList } from "react-native";
import React from "react";
import Div from "../shared/Div";
import Mytext from "../shared/CoustomText";
import { BookmarkIcon, ChevronRightIcon } from "react-native-heroicons/solid";
import { tw } from "twrnc";
import Header from "../shared/Header";
import { color } from "../shared/color";
import SavedTiele from "../shared/SavedTiele";

export default function Saved() {
  return (
    <Div className={` bg-[${color.bg}] flex-1 `}>
      <Header
        heading={"Saved Screen"}
        dis={"This is saved screen "}
        icon={<BookmarkIcon  color={color.primary} size={40} />}
      />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <SavedTiele name={"Anuj bhaiya"} dis="This is ds algo section " />
      <FlatList
        persistentScrollbar={false}
        showsVerticalScrollIndicator={false}
        bounces={true}
        alwaysBounceHorizontal={true}
        alwaysBounceVertical={true}
        renderItem={({ item, index }) => {}}
      />
    </Div>
  );
}
