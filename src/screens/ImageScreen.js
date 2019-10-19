import { Text } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageSceen = () => {
  return (
    <>
      <ImageDetail
        imageSource={require("../../assets/beach.jpg")}
        title={"Image 1"}
        score={3}
      />
      <ImageDetail
        imageSource={require("../../assets/forest.jpg")}
        title={"Image 2"}
        score={4}
      />
      <ImageDetail
        imageSource={require("../../assets/mountain.jpg")}
        title={"Image 3"}
        score={5}
      />
    </>
  );
};

export default ImageSceen;
