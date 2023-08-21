// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molucules/SearchInput";
import { UserCard } from "./components/organism/UserCard";

const user = {
  name: "make",
  image: "https://source.unsplash.com/%E5%86%99%E7%9C%9F/dKCKiC0BQtU",
  email: "abc@gmail.com",
  phone: "0120-828-828",
  company: { name: "テスト株式会社" },
  website: "https://google.com",
};

function App() {
  console.log("aaa");
  return (
    <>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput></SearchInput>
      <UserCard user={user} />
    </>
  );
}

export default App;
