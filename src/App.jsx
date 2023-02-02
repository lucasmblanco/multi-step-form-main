import MainContainer from "./components/MainContainer"
import FormContainer from "./components/FormContainer"
import Sidebar from "./components/Sidebar"
import PersonalInfoForm from "./components/Form/PersonalInfoForm";
import ButtonBar from "./components/ButtonBar";
import PlanForm from "./components/Form/PlanForm";
import AddOnsForm from "./components/Form/AddOnsForm"; 

function App() {
  // <PersonalInfoForm />

  return (
    <MainContainer>
      <Sidebar />
      <FormContainer>
        <AddOnsForm />
      </FormContainer>
      <ButtonBar />
    </MainContainer>
  );
}

export default App
