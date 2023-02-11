import React from 'react'
import PageIndicator from './PageIndicator'


const PAGES_INFO = {
  "personal-info": {
    name: "personal-info",
    id: 1,
    details: "YOUR INFO",
  },
  "plan-form": {
    name: "plan-subscription",
    id: 2,
    details: "SELECT PLAN",
  },
  "add-ons": {
    name: "add-ons",
    id: 3,
    details: "ADD-ONS",
  },
  summary: {
    name: "summary",
    id: 4,
    details: "SUMMARY",
  },
};

export default function SidebarContainer({ currentPage }) {
  return (
    <div className="p flex w-full justify-center gap-4 desktop:flex-col desktop:gap-0 desktop:px-9 desktop:py-4">
      <PageIndicator
        pageInformation={PAGES_INFO["personal-info"]}
        currentPage={currentPage}
      />
      <PageIndicator
        pageInformation={PAGES_INFO["plan-form"]}
        currentPage={currentPage}
      />
      <PageIndicator
        pageInformation={PAGES_INFO["add-ons"]}
        currentPage={currentPage}
      />
      <PageIndicator
        pageInformation={PAGES_INFO["summary"]}
        currentPage={currentPage}
      />
    </div>
  );
}
