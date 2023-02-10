import React, { useState } from "react";

export default function PageIndicator({ pageInformation, currentPage }) {
  return (
    <div className="min-h-[172px] pt-7 text-sm ">
      <p
        className={`${
          pageInformation.name === currentPage.name
            ? "border-none bg-lightBlue  text-marineBlue"
            : "bg-transparent text-white"
        } h-[2rem] w-[2rem] rounded-full border border-solid text-center font-ubuntuBl leading-8 
      `}
      >
        {pageInformation.id}
      </p>
    </div>
  );
}
