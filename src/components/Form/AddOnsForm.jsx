import React, { useEffect } from "react";
import CheckBoxButton from "./AddOnsFormComponents/CheckBoxButton";

export default function AddOnsForm({
  subscription,
  addOns,
  setAddOns,
  currentPage,
  setCurrentPage,
}) {
  const PAGE_ID = {
    name: "add-ons",
    next: "summary",
    prev: "plan-subscription",
  };

  const ADD_ONS_DATA = [
    {
      id: 1,
      name: "Online service",
      details: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      id: 2,
      name: "Larger storage",
      details: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      id: 3,
      name: "Customizable profile",
      details: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  useEffect(() => {
    setCurrentPage(PAGE_ID);
  }, []);

  return (
    currentPage.name === PAGE_ID.name && (
      <fieldset className={"border-none"}>
        <legend className="pl-2 pr-2 pt-7 font-ubuntuBl text-2xl desktop:text-[2rem]">
          Pick add-ons
        </legend>
        <p className="pl-2 pr-4 font-ubuntuRg text-base text-grey">
          Add-ons help enhance yout gaming experience
        </p>
        <div className="grid items-center gap-3 p-2 pl-2 pr-2 pt-5 pb-5">
          {ADD_ONS_DATA.map((addon) => {
            return (
              <CheckBoxButton
                key={addon.name}
                data={addon}
                addOns={addOns}
                setAddOns={setAddOns}
                monthly={subscription.monthly}
              />
            );
          })}
        </div>
      </fieldset>
    )
  );
}
