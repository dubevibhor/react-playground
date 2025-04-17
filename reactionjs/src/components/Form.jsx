//1 button, 1 input element
// On button click, focus on input element

import React, { useRef } from "react";
const inputData = [
  { key: 1, type: "text", placeholder: "input-1" },
  { key: 2, type: "text", placeholder: "input-2" },
  { key: 3, type: "text", placeholder: "input-3" },
];
const InputFocus = () => {
  const inputRefArray = [useRef(), useRef(), useRef()];
  //   const inputRefOne = useRef();
  //   const inputRefTwo = useRef();
  //   const inputRefThree = useRef();
  //   const handleButtonClick = () => {
  //     inputRef.current.focus();s
  //   };
  const handleInputKeyPress = (e, i) => {
    if (e.key === "Enter") {
      console.log("Enter Key Pressed", i);
      i < inputData.length - 1
        ? inputRefArray[i + 1].current.focus()
        : inputRefArray[0].current.focus();
    }
  };
  return (
    <>
      {inputData.map((element, index) => (
        <input
          {...element}
          ref={inputRefArray[index]}
          onKeyDown={(e) => {
            handleInputKeyPress(e, index);
          }}
        />
      ))}
      {/* <input type="text" ref={inputRefOne} onKeyDown={handleInputKeyPress} /> */}

      {/* <button onClick={handleButtonClick}>
        Click me to focus on input element
      </button> */}
    </>
  );
};

export default InputFocus;
