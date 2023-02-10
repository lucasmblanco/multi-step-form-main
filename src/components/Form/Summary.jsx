import React, { useEffect } from "react";

export default function Summary({
  subscription,
  addOns,
  currentPage,
  setCurrentPage,
}) {
  const PAGE_ID = {
    name: "summary",
    prev: "add-ons",
  };

  const onHandleButton = () => {
    setCurrentPage({ name: "plan-subscription" });
  };

  useEffect(() => {
    setCurrentPage(PAGE_ID);
  }, []);

  console.log(addOns);

  return (
    currentPage.name === PAGE_ID.name && (
      <section>
        <h2 className="pl-5 pr-5 pt-8 font-ubuntuBl text-2xl">Finishing up</h2>
        <p className="p px-5 py-3 font-ubuntuRg text-base text-grey">
          Double-check everything look OK before confirming.
        </p>
        <div className="grid gap-2">
          <div className="grid grid-cols-2  px-8 pt-7 text-sm">
            <p className="col-span-2 font-ubuntuBl  ">
              {subscription.plan} ({subscription.monthly ? "Monthly" : "Yearly"}
              )
            </p>
            <button
              onClick={onHandleButton}
              className="border-none bg-transparent text-sm text-grey decoration-lightBlack"
            >
              Change
            </button>
            <p className="justify-self-end font-ubuntuBl ">
              ${subscription.price}/{subscription.monthly ? "mo" : "yr"}
            </p>
          </div>
          <hr className="p mx-auto my-3 h-[1px] w-4/5 border-none bg-trueLightGrey" />

          {[...addOns]
            .sort((a, b) => a.id - b.id)
            .map((addon) => (
              <div
                key={addon.name}
                className="grid grid-cols-2 px-8 text-sm text-grey"
              >
                <p>{addon.name}</p>
                <p className="justify-self-end text-marineBlue">
                  +${addon.price}/{subscription.monthly ? "mo" : "yr"}
                </p>
              </div>
            ))}
          <div className="grid grid-cols-2 px-8 py-7 text-sm text-grey">
            <p>Total (per {subscription.monthly ? "Month" : "Year"})</p>
            <p className="justify-self-end font-ubuntuBl text-base text-purplishBlue">
              $
              {subscription.price +
                addOns.reduce((acc, curr) => (acc += curr.price), 0)}
              /{subscription.monthly ? "mo" : "yr"}
            </p>
          </div>
        </div>
      </section>
    )
  );
}
