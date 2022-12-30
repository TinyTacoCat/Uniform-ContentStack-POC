import React from "react";

//Remember to add export to components/index.js
export const FeaturedEvent = ({ component }) => {
  const { name } =
    component?.parameters?.event?.value ?? {};
  const { description } =
    component?.parameters?.event?.value ?? {};
  const { date } =
    component?.parameters?.event?.value ?? {};
  return (
    <div>
      <hr />
      <div>name: {name}</div>
      <div>description: {description}</div>
      <div>date: {date}</div>
    </div>
  );
};