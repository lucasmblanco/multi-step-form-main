import React, { useState } from "react";
import MainContainer from "./components/MainContainer";
import FormContainer from "./components/FormContainer";
import Sidebar from "./components/Sidebar";

function App() {
  const [currentPage, setCurrentPage] = useState({
    name: "personal-info",
  });

  const [pageRequiredInput, setPageRequiredInput] = useState({});

  return (
    <MainContainer>
      <Sidebar currentPage={currentPage} />
      <FormContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageRequiredInput={pageRequiredInput}
        setPageRequiredInput={setPageRequiredInput}
      />
    </MainContainer>
  );
}

export default App;
