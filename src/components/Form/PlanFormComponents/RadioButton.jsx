import React, { useEffect, useState } from "react";

export default function RadioButton({
  name,
  svg: Svg,
  price,
  subscription,
  setSubscription,
  checked = false,
  duration,
}) {
  const [priceValue, setPriceValue] = useState(price);

  function onHandleChange(e) {
    setSubscription({
      ...subscription,
      plan: e.target.dataset.name,
      price: priceValue,
    });
  }

  useEffect(() => {
    if (checked) {
      setSubscription({
        ...subscription,
        plan: name,
        price: price,
      });
    }
  }, []);

  useEffect(() => {
    setPriceValue(price);
  }, [price]);

  useEffect(() => {
    if (subscription.plan === name) {
      setSubscription({
        ...subscription,
        price: priceValue,
      });
    }
  }, [priceValue]);

  return (
    <label htmlFor={name.toLowerCase()}>
      <input
        id={name.toLowerCase()}
        name="plan"
        type="radio"
        value={price}
        className="peer absolute appearance-none"
        required={true}
        defaultChecked={subscription.plan === name || checked}
        onChange={(e) => onHandleChange(e)}
        data-name={name}
      />
      <div
        className="flex cursor-pointer items-start gap-3 rounded-lg border border-solid border-lightGrey
               p-4 peer-checked:border-marineBlue peer-checked:transition-all peer-checked:duration-100 desktop:min-w-fit desktop:flex-col desktop:gap-[1.2rem] desktop:p-5"
      >
        <Svg />
        <div>
          <p className="font-ubuntuBl text-base desktop:pt-6">{name}</p>
          <p className="text-sm text-grey">
            +${price}/{duration}
          </p>
          {subscription.yearly && (
            <p className="font-ubuntuMd text-xs desktop:py-1">2 months free</p>
          )}
        </div>
      </div>
    </label>
  );
}
