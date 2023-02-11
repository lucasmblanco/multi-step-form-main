import React, { useEffect, useState } from "react";

export default function Button({
  composition,
  currentElement,
  setCurrentPage,
  pageRequiredInput,
  display,
  setShow = null,
}) {
  const [visible, setVisible] = useState(Boolean(display));

  const Themes = {
    white:
      "desktop:w-5/12 desktop:rounded-lg bg-white desktop:text-base desktop:py-[.8rem] desktop:font-ubuntuMd desktop:justify-self-center w-6/12 py-3 px-2 col-start-1 justify-self-start text-grey text-sm font-ubuntuBl rounded border-none cursor-pointer cursor-pointer hover:text-marineBlue",
    dark: "desktop:w-5/12 desktop:rounded-lg desktop:text-base desktop:font-ubuntuMd desktop:py-[.8rem] desktop:justify-self-center col-start-2 w-6/12 cursor-pointer justify-self-end rounded border-none bg-marineBlue px-2 py-3 font-ubuntuMd text-sm text-white cursor-pointer hover:brightness-150",
    submit:
      "desktop:w-5/12 desktop:rounded-lg desktop:text-base desktop:font-ubuntuMd desktop:py-[.8rem] desktop:justify-self-center bg-purplishBlue w-6/12 text-white py-3 px-2 col-start-2 justify-self-end text-sm font-ubuntuMd rounded border-none cursor-pointer cursor-pointer hover:brightness-150",
  };

  const checkRequiredInput = (requiredInput) => {
    return requiredInput.every((element) => !element.status);
  };
  const changePage = (currentElement) => {
    currentElement === "submit" || setCurrentPage({ name: currentElement });
    setShow && setShow(false);
  };

  const onHandleButton = (currentElement, requiredInput) => {
    setShow && setShow(true);
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
