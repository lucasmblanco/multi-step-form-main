import React from "react";
import CheckBoxButton from "./AddOnsFormComponents/CheckBoxButton";

export default function AddOnsForm() {
  const ADD_ONS_DATA = [
    {
      name: "Online service",
      details: "Access to multiplayer games",
      monthlyPrice: "+$1/mo",
      yearlyPrice: "+$10/yr",
    },
    {
      name: "Larger storage",
      details: "Extra 1TB of cloud save",
      monthlyPrice: "+$2/mo",
      yearlyPrice: "+$20/yr",
    },
    {
      name: "Customizable profile",
      details: "Custom theme on your profile",
      monthlyPrice: "+$2/mo",
      yearlyPrice: "+$20/yr",
    },
  ];

  return (
    <fieldset className="border-0">
      <legend className="pl-2 pr-2 pt-7 font-ubuntuBl text-2xl">
        Pick add-ons
      </legend>
      <p className="pl-2 pr-4 font-ubuntuRg text-base text-grey">
        Add-ons help enhance yout gaming experience
      </p>
      <div className="grid items-center gap-3 p-2 pl-2 pr-2 pt-5 pb-5">
        {ADD_ONS_DATA.map((addon) => {
          return <CheckBoxButton key={addon.name} data={addon} />;
        })}
      </div>
    </fieldset>
  );
}
