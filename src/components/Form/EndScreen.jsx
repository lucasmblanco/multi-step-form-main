import React from "react";
import IconThankYou from "../../assets/images/IconThankYou";

export default function EndScreen() {
  return (
    <div className="flex flex-col content-center items-center px-2 pb-20 desktop:pt-20">
      <div className="h-1 p-20 ">
        <IconThankYou />
      </div>
      <div>
        <h2 className="w-full text-center font-ubuntuBl desktop:text-[2rem]">
          Thank you!
        </h2>
        <p className="w-full text-center font-ubuntuRg text-grey">
          Thanks for confirming your subscription!
        </p>
        <p className="w-full px-5 text-center font-ubuntuRg text-grey desktop:px-0">
          We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
