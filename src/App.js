import { useRef } from "react";
import "./styles.css";
import Input from "./Input";

export default function App() {
  const inputRef = useRef();
  const handleOnClick = () => {
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <Input ref={inputRef} />
      <button onClick={handleOnClick}>Focus</button>
    </div>
  );
}
