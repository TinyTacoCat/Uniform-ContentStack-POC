import React from "react";

//Remember to add export to components/index.js
export const FeaturedEvent = ({ component }) => {
  const { name } =
    component?.parameters?.event?.value ?? {};
  const { description } =
    component?.parameters?.event?.value ?? {};
  const { date } =
    component?.parameters?.event?.value ?? {};
  const { author } = component?.parameters?.event?.value ?? {};
  return (
    <div>
      <article style={{ margin: "20px 0", padding: "20px", border: "1px solid #ddd", boxShadow: "0 2px 3px #ccc", borderRadius: "5px", width: "100%" }}>
        <h1 style={{ margin: "0 0 10px 0", fontSize: "1.5em", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>{name}</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: "0 10px 0 0", fontSize: "0.8em", color: "#777" }}>{date}</p>
          <p style={{ margin: "0", fontSize: "0.8em", color: "#777", fontStyle: "italic" }}>by {author}</p>
        </div>
        <p style={{ margin: "20px 0 0 0", fontSize: "1.2em", lineHeight: "1.5" }}>{description}</p>
      </article>

    </div>
  );
};