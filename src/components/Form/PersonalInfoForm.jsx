import React, { useEffect } from "react";

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
  pageRequiredInput,
  show,
}) {
  const PAGE_ID = {
    name: "personal-info",
    next: "plan-subscription",
  };

  function onHandleChange(e, type) {
    switch (type) {
      case "name":
        setPageRequiredInput((prevState) =>
          prevState.map((element) =>
            element.name === e.target.name
              ? {
                  ...element,
                  status:
                    e.target.validity.valueMissing ||
                    e.target.validity.patternMismatch ||
                    e.target.validity.tooShort,
                }
              : element
          )
        );
        if (e.target.validity.valueMissing) {
        }
        setName(e.target.value);
        break;
      case "email":
        setPageRequiredInput((prevState) =>
          prevState.map((element) =>
            element.name === e.target.name
              ? {
                  ...element,
                  status:
                    e.target.validity.valueMissing ||
                    e.target.validity.typeMismatch,
                }
              : element
          )
        );
        setEmail(e.target.value);
        break;
      case "phone":
        setPageRequiredInput((prevState) =>
          prevState.map((element) =>
            element.name === e.target.name
              ? {
                  ...element,
                  status:
                    e.target.validity.valueMissing ||
                    e.target.validity.patternMismatch ||
                    e.target.validity.tooShort,
                }
              : element
          )
        );
        setPhone(e.target.value);
        break;
    }
  }
  /*
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

  */

  /*

  function onFocusHandle(e) {
    console.log(e.target.validity.valueMissing);
    setPageRequiredInput((prevState) =>
      prevState.map((element) =>
        element.name === e.target.name
          ? {
              ...element,
              status: e.target.validity.valueMissing,
            }
          : element
      )
    );
  }
*/
  const searchStatus = (name) => {
    return pageRequiredInput.find(
      (element) => element.name === name && element.status
    );
  };

  const invalidMessage = (name) => {
    return show && searchStatus(name);
  };

  useEffect(() => {
    setCurrentPage(PAGE_ID);
  }, []);

  return (
    currentPage.name === PAGE_ID.name && (
      <fieldset className={"border-none"}>
        <legend className="pl-2 pr-2 pt-7 font-ubuntuBl text-2xl desktop:text-[2rem]">
          Personal info
        </legend>
        <p className="pl-2 pr-4 font-ubuntuRg text-base text-grey ">
          Please provide your name, email, address, and phone number.
        </p>
        <div className="grid gap-4 px-2 pt-6 pb-6 desktop:gap-6">
          <div>
            <div className="grid w-full grid-cols-2 desktop:pb-2">
              <label htmlFor="name" className="block  font-ubuntuMd text-xs">
                Name
              </label>
              {invalidMessage("name") && (
                <span className="justify-self-end font-ubuntuBl text-xs text-invalid-input desktop:text-[.9rem]">
                  This field is required
                </span>
              )}
            </div>
            <input
              className={`peer  w-full rounded border border-solid border-lightGrey pl-4 pr-4 pt-2 pb-2 
         text-marineBlue placeholder:text-grey 
           focus:border-marineBlue focus:outline-none desktop:rounded-lg desktop:py-3 ${
             invalidMessage("name") ? "border-invalid-input" : ""
           }`}
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Stephen King"
              value={name}
              onChange={(e) => onHandleChange(e, "name")}
              required={true}
              minLength={2}
              pattern="[a-zA-Z]*"
            />
          </div>
          <div>
            <div className="grid w-full grid-cols-2 desktop:pb-2">
              <label htmlFor="email" className="block  font-ubuntuMd text-xs">
                Email Address
              </label>
              {invalidMessage("email") && (
                <span className="justify-self-end font-ubuntuBl text-xs text-invalid-input desktop:text-[.9rem]">
                  This field is required
                </span>
              )}
            </div>
            <input
              className={`peer  w-full rounded border border-solid border-lightGrey pl-4 pr-4 pt-2 pb-2
         text-marineBlue placeholder:text-grey  focus:border-marineBlue focus:outline-none desktop:rounded-lg desktop:py-3 ${
           invalidMessage("email") ? "border-invalid-input" : ""
         }`}
              type="email"
              id="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={(e) => onHandleChange(e, "email")}
              required={true}
            />
          </div>
          <div>
            <div className="grid w-full grid-cols-2 desktop:pb-2">
              <label htmlFor="phone" className="block   font-ubuntuMd text-xs">
                Phone Number
              </label>
              {invalidMessage("phone") && (
                <span className="justify-self-end font-ubuntuBl text-xs text-invalid-input desktop:text-[.9rem]">
                  This field is required
                </span>
              )}
            </div>
            <input
              className={`peer  w-full rounded border border-solid border-lightGrey pl-4 pr-4 pt-2 pb-2
         text-marineBlue placeholder:text-grey focus:border-marineBlue focus:outline-none desktop:rounded-lg desktop:py-3 ${
           invalidMessage("phone") ? "border-invalid-input" : ""
         }`}
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g. +1 234 567 890"
              value={phone}
              onChange={(e) => onHandleChange(e, "phone")}
              required={true}
              minLength={9}
              maxLength={10}
            />
          </div>
        </div>
      </fieldset>
    )
  );
}
