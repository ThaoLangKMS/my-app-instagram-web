"use client";
import { Carousel } from "@material-tailwind/react";
import React, { useRef, useState, useEffect, FunctionComponent } from "react";

interface CarouselProp {
  showAnimation: boolean;
}

export function CarouselDefault(props: CarouselProp) {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const lottie = props.showAnimation ? (
    <lottie-player
      id="firstLottie"
      ref={ref}
      autoPlay
      loop
      mode="normal"
      src="https://lottie.host/a8a4acb7-80d4-4a10-935a-27ee002b2cc3/CbvEfgVIcP.json"
      style={{ width: "300px", height: "300px" }}
      className="absolute bottom-4"
    />
  ) : null;

  const imagesAndVideos = [
    { type: "image", src: "camera.png" },
    { type: "video", src: "blue.mp4" },
    { type: "image", src: "front_camera.png" },
    { type: "image", src: "back_camera.png" },
  ];

  return (
    <Carousel className="rounded-xl relative">
      {imagesAndVideos.map((media, index) => (
        <div key={index}>
          {media.type === "image" ? (
            <img
              src={media.src}
              alt={`image ${index + 1}`}
              className="w-full object-cover relative"
            />
          ) : (
            <video controls width="100%" height="100%">
              <source src={media.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {props.showAnimation && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {lottie}
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
}
