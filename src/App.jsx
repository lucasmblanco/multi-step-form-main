import MainContainer from "./components/MainContainer"
import FormContainer from "./components/FormContainer"
import Sidebar from "./components/Sidebar"
import PersonalInfoForm from "./components/Form/PersonalInfoForm";
import ButtonBar from "./components/ButtonBar";
import PlanForm from "./components/Form/PlanForm";

function App() {
  // <PersonalInfoForm />

  return (
    <MainContainer>
      <Sidebar />
      <FormContainer>
        <PlanForm />
      </FormContainer>
      <ButtonBar />
    </MainContainer>
  );
}

export default App
