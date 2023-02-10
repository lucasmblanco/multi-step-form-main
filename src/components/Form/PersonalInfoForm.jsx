import React, { useEffect, useState } from "react";

export default function PersonalInfoForm({
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
  currentPage,
  setCurrentPage,
  setPageRequiredInput,
}) {
  const PAGE_ID = {
    name: "personal-info",
    next: "plan-subscription",
  };

  const [inputNameError, setInputNameError] = useState("");
  const [inputEmailError, setInputEmailError] = useState("");
  const [inputPhoneError, setInputPhoneError] = useState("");

  function onHandleChange(e, type) {
    switch (type) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
    }
  }

  function onBlurChange(e, type) {
    switch (type) {
      case "name":
        if (e.target.validity.tooShort) {
          setInputNameError("Your name is too short 😕");
        } else if (e.target.validity.patternMismatch) {
          setInputNameError("A single name composed only of letters 😬");
        }
        setPageRequiredInput((prevState) => ({
          ...prevState,
          [type]:
            e.target.validity.valueMissing ||
            e.target.validity.patternMismatch ||
            e.target.validity.tooShort,
        }));
        break;
      case "email":
        if (e.target.validity.typeMismatch) {
          setInputEmailError("We need a valid email adress 🤓");
        }
        setPageRequiredInput((prevState) => ({
          ...prevState,
          [type]:
            e.target.validity.valueMissing || e.target.validity.typeMismatch,
        }));
        break;
      case "phone":
        if (e.target.validity.tooShort) {
          setInputPhoneError("We need a valid phone number 😁");
        }
        setPageRequiredInput((prevState) => ({
          ...prevState,
          [type]: e.target.validity.valueMissing || e.target.validity.tooShort,
        }));
        break;
    }
  }

  useEffect(() => {
    setCurrentPage(PAGE_ID);
    setPageRequiredInput({
      name: !name,
      email: !email,
      phone: !phone,
    });
  }, []);

  return (
    currentPage.name === PAGE_ID.name && (
      <fieldset className={"border-none"}>
        <legend className="pl-2 pr-2 pt-7 font-ubuntuBl text-2xl">
          Personal info
        </legend>
        <p className="pl-2 pr-4 font-ubuntuRg text-base text-grey ">
          Please provide your name, email, address, and phone number.
        </p>
        <div className="grid gap-4 pt-6 pb-6">
          <p>
            <label
              htmlFor="fullname"
              className="block pl-2 pr-2 font-ubuntuMd text-xs"
            >
              Name
            </label>
            <input
              className="peer mr-2 ml-2 w-11/12 rounded border border-solid border-lightGrey pl-4 pr-4 pt-2 pb-2 
         text-marineBlue placeholder:text-grey 
           focus:border-marineBlue focus:outline-none"
              type="text"
              id="fullname"
              name="fullname"
              placeholder="e.g. Stephen King"
              value={name}
              onChange={(e) => onHandleChange(e, "name")}
              pattern="[A-Za-z]*"
              required={true}
              onBlur={(e) => onBlurChange(e, "name")}
              minLength={2}
            />
            <span className="invisible fixed ml-3 block w-fit rounded-b-lg bg-invalid-input px-1 font-ubuntuMd text-xs text-white peer-placeholder-shown:!invisible peer-invalid:visible">
              {inputNameError}
            </span>
          </p>
          <p>
            <label
              htmlFor="email"
              className="block pl-2 pr-2 font-ubuntuMd text-xs"
            >
              Email Address
            </label>
            <input
              className="peer mr-2 ml-2 w-11/12 rounded border border-solid border-lightGrey pl-4 pr-4 pt-2 pb-2
         text-marineBlue placeholder:text-grey  focus:border-marineBlue focus:outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={(e) => onHandleChange(e, "email")}
              required={true}
              onBlur={(e) => onBlurChange(e, "email")}
            />
            <span className="invisible fixed ml-3 block w-fit rounded-b-lg bg-invalid-input px-1 font-ubuntuMd text-xs text-white peer-placeholder-shown:!invisible peer-invalid:visible">
              {inputEmailError}
            </span>
          </p>
          <p>
            <label
              htmlFor="phone"
              className="block pl-2 pr-2  font-ubuntuMd text-xs"
            >
              Phone Number
            </label>
            <input
              className="peer mr-2 ml-2 w-11/12 rounded border border-solid border-lightGrey pl-4 pr-4 pt-2 pb-2
         text-marineBlue placeholder:text-grey focus:border-marineBlue focus:outline-none "
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g. +1 234 567 890"
              value={phone}
              onChange={(e) => onHandleChange(e, "phone")}
              required={true}
              onBlur={(e) => onBlurChange(e, "phone")}
              minLength={9}
              maxLength={10}
            />
            <span className="invisible fixed ml-3 block w-fit rounded-b-lg bg-invalid-input px-1 font-ubuntuMd text-xs text-white peer-placeholder-shown:!invisible peer-invalid:visible">
              {inputPhoneError}
            </span>
          </p>
        </div>
      </fieldset>
    )
  );
}
