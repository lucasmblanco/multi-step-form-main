import React, { useEffect } from "react";
import IconCheckmark from "./../../../assets/images/IconCheckMark";

export default function CheckBoxButton({ data, addOns, setAddOns, monthly }) {
  const dataPrice = monthly ? data.monthlyPrice : data.yearlyPrice;

  const createId = (s) => s.toLowerCase().replace(" ", "-");

  function onHandleChange(e) {
    const dataChecker = addOns.some(
      (element) => element.name === e.target.name
    );
    if (!dataChecker) {
      setAddOns([
        ...addOns,
        {
          id: data.id,
          name: e.target.name,
          price: Number(e.target.value),
        },
      ]);
    } else {
      setAddOns((prevState) =>
        prevState.filter((element) => element.name !== e.target.name)
      );
    }
  }
  useEffect(() => {
    setAddOns((prevState) =>
      prevState.map((element) =>
        element.name === data.name && element.price !== dataPrice
          ? {
              ...element,
              price: dataPrice,
            }
          : element
      )
    );
  }, []);

  return (
    <label htmlFor={createId(data.name)}>
      <input
        type="checkbox"
        id={createId(data.name)}
        className="peer fixed appearance-none"
        name={data.name}
        onChange={(e) => onHandleChange(e)}
        value={monthly ? data.monthlyPrice : data.yearlyPrice}
        defaultChecked={addOns.some((addon) => addon.name === data.name)}
      />
      <div
        className="flex cursor-pointer items-center gap-3 rounded-lg
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
          {monthly ? (
            <p className="row-span-2 self-center justify-self-end text-xs text-purplishBlue">
              +${data.monthlyPrice}/mo
            </p>
          ) : (
            <p className="row-span-2 self-center justify-self-end text-xs text-purplishBlue">
              +${data.yearlyPrice}/yr
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
