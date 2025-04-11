import React from "react";
import "./App.css";
import { TodoList } from "./components/todo";
// import { MergedList } from "./components/merged-list";

export default function App() {
  console.log("Hello");
  return (
    <>
      Namaste
      {/* <MergedList /> */}
      <TodoList />
    </>
  );
}
