import React, { useEffect } from "react";

export const TodoList = () => {
  useEffect(() => {
    fetch("https://json-mock.org/api/todos", { method: "POST" })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return <></>;
};
