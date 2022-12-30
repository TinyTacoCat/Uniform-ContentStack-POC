
import React from "react";
import { useState } from 'react';
import LanguageSelector from "./LanguageSelector";;

export const Header = ({ component }) => {
  const name =
  component?.parameters?.name?.value ?? {};

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.8)", boxShadow: "0 2px 3px rgba(0, 0, 0, 0.5)", height: "60px" }}>
      <LanguageSelector />
      <h1 style={{ margin: "0", padding: "10px", textAlign: "center", color: "white", fontSize: "1.5em" }}>{name}</h1>
    </div>
  );
};