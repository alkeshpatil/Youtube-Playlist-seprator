import { VideoFullscreenUpdate } from "expo-av";
import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import * as ScreenOrientation from "expo-screen-orientation";
import Mytext from "../shared/CoustomText";
import Div from "../shared/Div";
export default function YtScreen({ id }) {
  const [playing, setPlaying] = useState(false);
  const [oriantationIsLandscape, setOriantationIsLandscape] = useState(true);
  const playerRef = useRef();

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const onChangeFullScreenHandler = () => {
    if (oriantationIsLandscape) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      setOriantationIsLandscape(false);
    }
    if (!oriantationIsLandscape) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      setOriantationIsLandscape(true);
    }
  };
  return (
    <Div className={"rounded-xl  overflow-hidden "}>
      <YoutubePlayer
        height={200}
        ref={playerRef}
        play={playing}
        videoId={id}
        onFullScreenChange={onChangeFullScreenHandler}
        onChangeState={onStateChange}
        allowWebViewZoom={false}
        initialPlayerParams={{
          preventFullScreen: false,
          
        }}
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </Div>
  );
}
