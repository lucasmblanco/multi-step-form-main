import React from "react";

export default function RadioButton({ name, svg: Svg, price }) {
  return (
    <label htmlFor={name.toLowerCase()}>
      <input
        id={name.toLowerCase()}
        name="plan"
        type="radio"
        value={name.toLowerCase()}
        className="peer absolute appearance-none"
      />
      <div
        className="flex cursor-pointer items-start gap-3 rounded-lg border border-solid border-lightGrey
               p-4 peer-checked:border-marineBlue peer-checked:transition-all peer-checked:duration-100"
      >
        <Svg />
        <div className="">
          <p className="font-ubuntuBl text-base">{name}</p>
          <p className="text-sm text-grey">{price}</p>
          <p className="font-ubuntuMd text-xs">2 months free</p>
        </div>
      </div>
    </label>
  );
}
