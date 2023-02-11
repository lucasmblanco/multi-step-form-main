import React, { useEffect, useState } from "react";
import RadioButton from "./PlanFormComponents/RadioButton";
import IconArcade from "./../../assets/images/IconArcade";
import IconAdvanced from "../../assets/images/IconAdvanced";
import IconPro from "./../../assets/images/IconPro";

const PLAN_INFORMATION = {
  arcade: {
    name: "Arcade",
    "monthly-price": 9,
    "yearly-price": 90,
  },
  advanced: {
    name: "Advanced",
    "monthly-price": 12,
    "yearly-price": 120,
  },
  pro: {
    name: "Pro",
    "monthly-price": 15,
    "yearly-price": 150,
  },
};

export default function PlanForm({
  subscription,
  setSubscription,
  currentPage,
  setCurrentPage,
}) {
  const PAGE_ID = {
    name: "plan-subscription",
    next: "add-ons",
    prev: "personal-info",
  };

  const onHandleBilling = (e) => {
    setSubscription({
      ...subscription,
      monthly: !e.target.checked,
      yearly: e.target.checked,
    });
  };

  useEffect(() => {
    setCurrentPage(PAGE_ID);
  }, []);

  return (
    currentPage.name === PAGE_ID.name && (
      <fieldset className={"border-none"}>
        <legend className="pl-2 pr-2 pt-7 font-ubuntuBl text-2xl desktop:text-[2rem]">
          Select your plan
        </legend>
        <p className="pl-2 pr-4 font-ubuntuRg text-base text-grey">
          You have the option of monthly or yearly billing
        </p>
        <div className="grid gap-3 pl-2 pr-2 pt-5 desktop:grid-cols-3">
          <RadioButton
            name={PLAN_INFORMATION.arcade.name}
            svg={IconArcade}
            price={
              subscription.yearly
                ? PLAN_INFORMATION.arcade["yearly-price"]
                : PLAN_INFORMATION.arcade["monthly-price"]
            }
            duration={subscription.yearly ? "yr" : "mo"}
            subscription={subscription}
            setSubscription={setSubscription}
          />
          <RadioButton
            name={PLAN_INFORMATION.advanced.name}
            svg={IconAdvanced}
            price={
              subscription.yearly
                ? PLAN_INFORMATION.advanced["yearly-price"]
                : PLAN_INFORMATION.advanced["monthly-price"]
            }
            duration={subscription.yearly ? "yr" : "mo"}
            subscription={subscription}
            setSubscription={setSubscription}
            checked={subscription.plan === ""}
          />
          <RadioButton
            name={PLAN_INFORMATION.pro.name}
            svg={IconPro}
            price={
              subscription.yearly
                ? PLAN_INFORMATION.pro["yearly-price"]
                : PLAN_INFORMATION.pro["monthly-price"]
            }
            duration={subscription.yearly ? "yr" : "mo"}
            subscription={subscription}
            setSubscription={setSubscription}
          />
        </div>
        <div className=" flex items-center justify-center gap-4 p-11 text-sm">
          <input
            id="billing"
            className="peer absolute cursor-pointer appearance-none"
            type="checkbox"
            onChange={onHandleBilling}
            defaultChecked={subscription.yearly}
          />
          <p className="font-ubuntuBl text-marineBlue peer-checked:text-grey">
            Monthly
          </p>

          <label
            htmlFor="billing"
            className="flex items-center 
            before:h-[1.3rem] before:w-[2.2rem] 
            before:rounded-2xl before:bg-midnight before:content-[''] 
           after:absolute after:m-1 after:h-[0.76rem] 
           after:w-[0.76rem] after:cursor-pointer after:rounded-2xl 
           after:bg-white after:transition-all after:duration-100
           after:content-[''] peer-checked:after:translate-x-[0.9rem] peer-checked:after:bg-white"
          ></label>
          <p className="font-ubuntuBl text-grey peer-checked:text-marineBlue">
            Yearly
          </p>
        </div>
      </fieldset>
    )
  );
}
