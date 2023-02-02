import React from "react";
import IconCheckmark from "./../../../assets/images/IconCheckMark";

export default function CheckBoxButton({ data, plan = "month" }) {
  const createId = (s) => s.toLowerCase().replace(" ", "-");

  return (
    <label htmlFor={createId(data.name)}>
      <input
        type="checkbox"
        id={createId(data.name)}
        className="peer fixed appearance-none"
        name={createId(data.name)}
      />
      <div
        className="flex cursor-pointer  items-center gap-3 rounded-lg
     border border-solid border-lightGrey py-[.65rem] px-[1rem]
      peer-checked:border-marineBlue
     peer-checked:transition-all  peer-checked:[&_.default]:hidden peer-checked:[&_.active]:flex"
      >
        <div className="default flex h-5 w-fit items-center rounded border border-solid border-grey bg-white p-1">
          <IconCheckmark />
        </div>
        <div className="active hidden h-5 w-fit items-center rounded border border-solid border-transparent bg-purplishBlue p-1">
          <IconCheckmark />
        </div>
        <div className="grid w-full grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_0.7fr)] px-1 py-[0.18rem]">
          <p className="col-span-2 font-ubuntuBl text-sm">{data.name}</p>
          {plan === "month" ? (
            <p className="row-span-2 self-center justify-self-end text-xs text-purplishBlue">
              {data.monthlyPrice}
            </p>
          ) : (
            <p className="row-span-2 self-center justify-self-end text-xs text-purplishBlue">
              {data.yearlyPrice}
            </p>
          )}
          <p className="col-span-2 font-ubuntuRg text-xs text-grey">
            {data.details}
          </p>
        </div>
      </div>
    </label>
  );
}
