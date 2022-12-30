import React from "react";

export const Hero = ({ component }) => {
  const{message} = component?.parameters?.message?.value ?? {};
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {message}
    </div>
  );
};