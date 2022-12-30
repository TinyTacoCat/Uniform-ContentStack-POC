import React from "react";

export const Hero = ({ component }) => {
  const { message } = component?.parameters?.message?.value ?? {};
  const { image } = component?.parameters?.message?.value ?? {};
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={image.url} alt="image" style={{ width: "100%" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)", color: "white", padding: "10px" }}>
          <h1 style={{ margin: 0 }}>{message}</h1>
        </div>
      </div>
    </div>
  );
};