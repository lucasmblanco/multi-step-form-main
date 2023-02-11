import React, { useState } from "react";
import PersonalInfoForm from "./Form/PersonalInfoForm";
import PlanForm from "./Form/PlanForm";
import AddOnsForm from "./Form/AddOnsForm";
import Summary from "./Form/Summary";
import ButtonBar from "./ButtonBar";
import EndScreen from "./Form/EndScreen";

export default function FormContainer({
  currentPage,
  setCurrentPage,
  pageRequiredInput,
  setPageRequiredInput,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subscription, setSubscription] = useState({
    plan: "",
    price: "",
    monthly: true,
    yearly: false,
  });
  const [addOns, setAddOns] = useState([]);

  const [show, setShow] = useState(false);

  const FORM_PAGES = {
    "personal-info": (
      <PersonalInfoForm
        name={name}
        email={email}
        phone={phone}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setPageRequiredInput={setPageRequiredInput}
        pageRequiredInput={pageRequiredInput}
        show={show}
      />
    ),
    "plan-subscription": (
      <PlanForm
        subscription={subscription}
        setSubscription={setSubscription}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setPageRequiredInput={setPageRequiredInput}
      />
    ),
    "add-ons": (
      <AddOnsForm
        subscription={subscription}
        addOns={addOns}
        setAddOns={setAddOns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    ),
    summary: (
      <Summary
        subscription={subscription}
        addOns={addOns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    ),
    "end-screen": <EndScreen />,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentPage({ name: "end-screen" });
  }

  return (
    <form action="" className="flex grow flex-col" onSubmit={handleSubmit}>
      <div
        className="relative top-[-5.5rem] m-4
     min-w-min rounded-lg bg-white font-ubuntuMd text-marineBlue shadow-md shadow-silver desktop:top-0 desktop:m-0 desktop:h-full desktop:min-w-full desktop:p-5 desktop:px-20 desktop:shadow-none"
      >
        {FORM_PAGES[currentPage.name]}
      </div>
      <ButtonBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageRequiredInput={pageRequiredInput}
        setShow={setShow}
      />
    </form>
  );
}
