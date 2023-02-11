import React, { useState } from "react";
import MainContainer from "./components/MainContainer";
import FormContainer from "./components/FormContainer";
import Sidebar from "./components/Sidebar";

function App() {
  const [currentPage, setCurrentPage] = useState({
    name: "personal-info",
  });

  const [pageRequiredInput, setPageRequiredInput] = useState([
    {
      name: "name",
      status: true,
    },
    {
      name: "email",
      status: true,
    },
    {
      name: "phone",
      status: true,
    },
  ]);

  return (
    <div className="desktop:grid desktop:h-screen desktop:place-content-center desktop:place-items-center desktop:bg-trueBg ">
      <MainContainer>
        <Sidebar currentPage={currentPage} />
        <FormContainer
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageRequiredInput={pageRequiredInput}
          setPageRequiredInput={setPageRequiredInput}
        />
      </MainContainer>
    </div>
  );
}

export default App;
