import React, { useState } from "react";

import Container from "./UI/Container/Container";
import CustomerDataForm from "./Components/CustomerDataForm/CustomerDataForm";
import ResignationTemplate from "./Components/ResignationTemplate/ResignationTemplate";

import "./App.scss";
function App() {
  const [resignationDetails, setResignationDetails] = useState({});

  const resignationDetailsHandler = (resignationDetails) => {
    setResignationDetails(resignationDetails);
  };

  return (
    <>
      <header></header>
      <main>
        <div className="row mt-2 d-flex">
          <Container className="col-12 col-md-4 ms-md-3">
            <CustomerDataForm resignationDetails={resignationDetailsHandler} />
          </Container>
          <div className="col-12 col-md-7 mt-2 mt-md-0 ms-md-1">
            {resignationDetails.resignationDate && (
              <Container className="p-1">
                <ResignationTemplate
                  resignationDetails={resignationDetails}
                ></ResignationTemplate>
              </Container>
            )}
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
