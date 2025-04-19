import "./App.css";
import Navbar from "./components/Navigation";
import InputFocus from "./components/Form";
import Pagination from "./components/pagination";
import DarkLightMode from "./components/dark-light-switch";
import { useRef } from "react";

function App() {
  const incrementButton = useRef(null);
  return (
    <>
      <h1>Hello World</h1>
      {/* <Navbar></Navbar> */}
      {/* <InputFocus></InputFocus> */}
      {/* <Pagination></Pagination> */}
      <DarkLightMode></DarkLightMode>

      <button ref={incrementButton}>Increment Counter</button>
    </>
  );
}

export default App;
