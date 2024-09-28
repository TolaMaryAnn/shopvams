import React from "react";
import Lottie from "react-lottie";
import loading from "../assets/loading.json"

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;