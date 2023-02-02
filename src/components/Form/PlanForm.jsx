import React from "react";
import RadioButton from "./PlanFormComponents.jsx/RadioButton";
import IconArcade from "./../../assets/images/IconArcade";
import IconAdvanced from "../../assets/images/IconAdvanced";
import IconPro from "./../../assets/images/IconPro";

export default function PlanForm() {
  return (
    <fieldset className="border-0">
      <legend className="pl-2 pr-2 pt-7 font-ubuntuBl text-2xl">
        Select your plan
      </legend>
      <p className="pl-2 pr-4 font-ubuntuRg text-base text-grey">
        You have the option of monthly or yearly billing
      </p>
      <div className="grid gap-3 pl-2 pr-2 pt-5">
        <RadioButton name={"Arcade"} svg={IconArcade} price={"$90/yr"} />
        <RadioButton name={"Advanced"} svg={IconAdvanced} price={"$90/yr"} />
        <RadioButton name={"Pro"} svg={IconPro} price={"$90/yr"} />
      </div>
      <div className=" flex items-center justify-center gap-4 p-11 text-sm">
        <p className="font-ubuntuBl">Monthly</p>
        <input
          id="billing"
          className="peer absolute cursor-pointer appearance-none"
          type="checkbox"
        />
        <label
          htmlFor="billing"
          className="flex items-center 
            before:h-[1.3rem] before:w-[2.2rem] 
            before:rounded-2xl before:bg-midnight before:content-[''] 
           after:absolute after:m-1 after:h-[0.76rem] 
           after:w-[0.76rem] after:rounded-2xl after:bg-white 
           after:transition-all after:duration-100 after:content-['']
           peer-checked:after:translate-x-[0.9rem] peer-checked:after:bg-white"
        ></label>
        <p className="font-ubuntuBl">Yearly</p>
      </div>
    </fieldset>
  );
}
