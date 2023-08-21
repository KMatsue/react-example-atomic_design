// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Router } from "./router/Router";

const user = {
  name: "make",
  image: "https://source.unsplash.com/FVJ_rSzuHdQ",
  email: "abc@gmail.com",
  phone: "0120-828-828",
  company: { name: "テスト株式会社" },
  website: "https://google.com",
};

function App() {
  console.log("aaa");
  return (
    <>
      <Router />
    </>
  );
}

export default App;
