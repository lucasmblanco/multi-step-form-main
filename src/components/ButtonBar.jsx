import React from "react";
import Button from "./Buttons/Button";

export default function ButtonBar() {
  return (
    <div className="mt-auto flex w-full justify-between bg-white p-3">
      <Button name={"Go Back"} theme={"white"} />
      <Button name={"Next Step"} theme={"dark"} />
    </div>
  );
}
