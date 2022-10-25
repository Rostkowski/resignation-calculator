import Container from "./UI/Container/Container";

import CustomerDataForm from "./Components/CustomerDataForm/CustomerDataForm";
import ResignationTemplate from "./Components/ResignationTemplate/ResignationTemplate";

import "./App.scss";
function App() {
  return (
    <>
      <header></header>
      <main>
        <div className="row mt-2 d-flex">
          <Container className="col-12 col-md-4 ms-md-3">
            <CustomerDataForm />
          </Container>
          <div className="col-12 col-md-7 mt-2 mt-md-0 ms-md-1">
          <Container >
            <ResignationTemplate></ResignationTemplate>
          </Container>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
