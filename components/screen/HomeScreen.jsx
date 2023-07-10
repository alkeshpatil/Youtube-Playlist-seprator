import React, { useEffect, useState } from "react";
import { FlatList, Image, Button, text } from "react-native";
import Mytext from "../shared/CoustomText";
import Div from "../shared/Div";
import Input from "../shared/Input";
import Btn from "../shared/Button";
import YtScreen from "./Ytscreen";
import { color } from "../shared/color";
import Header from "../shared/Header";
import { SearchIcon } from "react-native-heroicons/outline";
import { FloatingAction } from "react-native-floating-action";

export default function HomeScreen({ navigation }) {
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [getUrl, setGetUrl] = useState("");
  const [urlId, setGetUrlId] = useState("");
  const [show, setShow] = useState();

  useEffect(() => {
    fetchData();
  }, [urlId, getUrl]);

  function getUrlId(url) {
    const id = url.split("?list=")[1];
    console.log(id);
    return id;
  }
  const fetchData = async () => {
    const TOCKEN = "AIzaSyD_MQgEgp44xI7OpYuM39p3TRpALWPJSTM";
    const PLAY_LIST_ID = "";
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=1000&playlistId=${urlId}&key=${TOCKEN}`;

    const resp = await fetch(url);
    console.log(resp);
    const data = await resp.json();
    setApi(data.items);
    setIsLoading(false);
  };
  const handelOnpress = async () => {
    setShow(<Mytext className={" text-white mt-10"}>Loading</Mytext>);
    setGetUrlId(getUrlId(getUrl));
    await fetchData();
    setShow(<ApiFetchingDiv />);
  };

  const ApiFetchingDiv = () => {
    return (
      <Div className={"relative mx-3 "}>
        <Div className={"absolute h-10 w-100 z-10"}></Div>
        <FlatList
          persistentScrollbar={false}
          showsVerticalScrollIndicator={false}
          bounces={true}
          alwaysBounceHorizontal={true}
          alwaysBounceVertical={true}
          data={api}
          style={{
            borderRadius: 10,
            paddingBottom: 100,
          }}
          renderItem={({ item, index }) => (
            <Div className={` border border-[${color.bg2}]  rounded-2xl my-2`}>
              {/* <Mytext className={"text-blue-400 text-center text-xl mb-4 "}>
                {item.snippet.channelTitle}
              </Mytext> */}

              <Div className={"m-5"}>
                {/* <Image
                  source={{ uri: item.snippet.thumbnails.high.url }}
                  style={{
                    aspectRatio: 16 / 9,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                  // style={tw` `}
                /> */}
                <YtScreen id={item.snippet.resourceId.videoId} />
              </Div>
              <Div className={"mx-6 mb-3"}>
                <Mytext className={"text-white text-lg "}>
                  {index + 1} - {item.snippet.title}
                </Mytext>
                <Mytext
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  className={"text-gray-400 text-sm my-2"}
                >
                  {item.snippet.description.trim(100)}
                </Mytext>
              </Div>
            </Div>
          )}
        />
      </Div>
    );
  };

  if (isLoading)
    return (
      <Div className={"flex justify-center items-center "}>
        <Mytext className={"text-gray-300 text-xl"}>Loading . . .</Mytext>
      </Div>
    );

  return (
    <Div className={`flex-1 bg-[${color.bg}]`}>
      <Header
        heading={"Search"}
        dis="Search hear"
        icon={<SearchIcon color={color.primary} size={30} />}
      />
      <Div className={"flex flex-row mx-3 justify-between  overflow-hidden "}>
        <Input
          className={" w-7/11  rounded-lg mr-2"}
          onChangeText={(text) => {
            setGetUrl(text);
            // setShow("");
          }}
          defaultValue={getUrl}
          placeholder="paste link"
        />
        <Btn className={"w-4/12"} onPress={handelOnpress}>
          Search
        </Btn>
      </Div>
      {show}
      <FloatingAction
        color={color.primary}
        // icon={<SaveAsIcon color={color.bg} />}
        text={"save"}
      />
    </Div>
  );
}
