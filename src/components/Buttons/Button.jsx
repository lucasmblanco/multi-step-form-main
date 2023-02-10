import React, { useEffect, useState } from "react";

export default function Button({
  composition,
  currentElement,
  setCurrentPage,
  pageRequiredInput,
  display,
}) {
  const [visible, setVisible] = useState(Boolean(display));

  const Themes = {
    white:
      "bg-white w-6/12 py-3 px-2 col-start-1 justify-self-start text-grey text-sm font-ubuntuBl rounded border-none cursor-pointer cursor-pointer",
    dark: "col-start-2 w-6/12 cursor-pointer justify-self-end rounded border-none bg-marineBlue px-2 py-3 font-ubuntuMd text-sm text-white cursor-pointer",
    submit:
      "bg-purplishBlue w-6/12 text-white py-3 px-2 col-start-2 justify-self-end text-sm font-ubuntuMd rounded border-none cursor-pointer cursor-pointer",
  };

  const checkRequiredInput = (requiredInput) => {
    return Object.values(requiredInput).every((value) => !value);
  };
  const changePage = (currentElement) => {
    currentElement === "submit" || setCurrentPage({ name: currentElement });
  };

  const onHandleButton = (currentElement, requiredInput) => {
    return checkRequiredInput(requiredInput) && changePage(currentElement);
  };

  useEffect(() => {
    setVisible(Boolean(display));
  }, [display]);

  return (
    visible && (
      <>
        <button
          type={composition.type}
          defaultValue={composition.name}
          className={Themes[composition.theme]}
          onClick={() => onHandleButton(currentElement, pageRequiredInput)}
        >
          {composition.name}
        </button>
      </>
    )
  );
}

//{Themes[composition.theme]}
