import React, { useState } from "react";

export default function PageIndicator({ pageInformation, currentPage }) {
  return (
    <div className="min-h-[172px] flex-wrap pt-7 text-sm desktop:flex desktop:min-h-fit desktop:gap-4">
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
      <div className="hidden desktop:block">
        <p className="p-0 font-ubuntuRg text-xs text-light-purplish-blue">
          STEP {pageInformation.id}
        </p>
        <p className="p-0 font-ubuntuBl text-white">
          {pageInformation.details}
        </p>
      </div>
    </div>
  );
}
