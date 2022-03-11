import React, { useImperativeHandle } from "react";
const Input = (props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("Focused to the input box");
    }
  }));
  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
};
export default React.forwardRef(Input);
