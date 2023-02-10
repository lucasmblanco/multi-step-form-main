import React, { useLayoutEffect, useState } from "react";
import Button from "./Buttons/Button";

const BUTTON_ACTION = {
  back: {
    name: "Go Back",
    theme: "white",
    type: "button",
  },
  next: {
    name: "Next Step",
    theme: "dark",
    type: "button",
  },
  submit: {
    name: "Confirm",
    theme: "submit",
    type: "submit",
  },
};

export default function ButtonBar({
  currentPage,
  setCurrentPage,
  pageRequiredInput,
}) {
  return (
    <div className="mt-auto grid w-full grid-cols-2 justify-between bg-white p-3">
      <Button
        composition={BUTTON_ACTION.back}
        currentElement={currentPage.prev}
        setCurrentPage={setCurrentPage}
        pageRequiredInput={pageRequiredInput}
        display={currentPage.prev}
      />

      <Button
        composition={BUTTON_ACTION.next}
        currentElement={currentPage.next}
        setCurrentPage={setCurrentPage}
        pageRequiredInput={pageRequiredInput}
        display={currentPage.next}
      />

      <Button
        composition={BUTTON_ACTION.submit}
        currentElement={currentPage.name}
        setCurrentPage={setCurrentPage}
        pageRequiredInput={pageRequiredInput}
        display={currentPage.name === "summary"}
      />
    </div>
  );
}
