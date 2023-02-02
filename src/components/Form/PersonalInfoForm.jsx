import React from 'react'

export default function PersonalInfoForm() {
  return (
    <fieldset className="border-0">
      <legend className="pl-2 pr-2 pt-7 font-ubuntuBl text-2xl">
        Personal info
      </legend>
      <p className="pl-2 pr-4 font-ubuntuRg text-base text-grey ">
        Please provide your name, email, address, and phone number.
      </p>
      <p>
        <label
          htmlFor="fullname"
          className="block pl-2 pr-2 pt-5 font-ubuntuRg text-xs"
        >
          Name
        </label>
        <input
          className="ml-2 w-11/12 rounded border border-solid border-lightGrey pl-4 pr-4 pt-2 pb-2 
         text-marineBlue placeholder:text-grey focus:border-marineBlue focus:outline-none "
          type="text"
          id="fullname"
          name="fullname"
          placeholder="e.g. Stephen King"
        />
      </p>
      <p>
        <label
          htmlFor="email"
          className="block pl-2 pr-2 pt-5 font-ubuntuRg text-xs"
        >
          Email Address
        </label>
        <input
          className="mr-2 ml-2 w-11/12 rounded border border-solid border-lightGrey pl-4 pr-4 pt-2 pb-2
         text-marineBlue placeholder:text-grey focus:border-marineBlue focus:outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </p>
      <p>
        <label
          htmlFor="phone"
          className="block pl-2 pr-2 pt-3 font-ubuntuRg text-xs"
        >
          Phone Number
        </label>
        <input
          className="mr-2 ml-2 mb-7 w-11/12 rounded border border-solid border-lightGrey pl-4 pr-4 pt-2 pb-2
         text-marineBlue placeholder:text-grey focus:border-marineBlue focus:outline-none"
          type="phone"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </p>
    </fieldset>
  );
}
