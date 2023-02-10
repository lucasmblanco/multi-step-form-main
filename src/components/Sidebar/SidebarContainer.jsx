import React from 'react'
import PageIndicator from './PageIndicator'


const PAGES_INFO = {
  "personal-info": {
    name: "personal-info",
    id: 1,
    details: "abc",
  },
  "plan-form": {
    name: "plan-subscription",
    id: 2,
    details: "abc",
  },
  "add-ons": {
    name: "add-ons",
    id: 3,
    details: "abc",
  },
  summary: {
    name: "summary",
    id: 4,
    details: "abc",
  },
};

export default function SidebarContainer({ currentPage }) {
  return (
    <div className="flex w-full justify-center gap-4">
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
