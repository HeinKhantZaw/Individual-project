import Lottie from "lottie-react";
import loadingAnimation from "../../assets/anim/loading.json";
import React from "react";

const LoadingAnimation = () => {
  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      zIndex: 100
    }}
    >
      <Lottie animationData={loadingAnimation} autoplay={true} loop={true}
        style={{ height: "100%", width: "150px", margin: "0 auto" }} />
    </div>
  );
};

export default LoadingAnimation;
