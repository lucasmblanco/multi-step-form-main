import MainContainer from "./components/MainContainer"
import FormContainer from "./components/FormContainer"
import Sidebar from "./components/Sidebar"
import FormPersonalInfo from "./components/Form/PersonalInfoForm"




function App() {
  return (
    <>
      <MainContainer>
        <Sidebar />
        <FormContainer >
          <FormPersonalInfo />
        </FormContainer>
        
      </MainContainer>    
    </>
  )
}

export default App
