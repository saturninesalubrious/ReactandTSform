import { UserForm } from "./useForm"
import { AddressForm } from "./AddressForm"
import { AccountForm } from "./AccountForm"
import {useMultistepForm} from "./useMultiForm.tsx"
import { FormEvent, useState } from "react"


type formData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
  
}

const INITIAL_DATA: formData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",

}


function App() {
  const [data, setData] = useState(INITIAL_DATA)
  
  function updateFields(fields: Partial<formData>){
  setData(prev =>{
    return{...prev, ...fields}
  })}

  const {isFirstStep ,next, back, currentStep, currentStepIndex, steps, isLastStep} = useMultistepForm([<UserForm updateFields={updateFields} {...data}/>, <AddressForm  updateFields={updateFields} {...data}/>, <AccountForm updateFields={updateFields} {...data}/>])

  function onSubmit(e: FormEvent){
    e.preventDefault()
    if (!isLastStep) {return next()}
    else {
      alert("Successful Account creation")
    }

  }
  return <div style={{
    position: "relative",
    background: "white",
    border: "1px solid black",
    padding: "2rem",
    margin: "1rem",
    borderRadius: ".5rem",
    fontFamily: "Arial"
  }}>
    <form onSubmit={onSubmit}>
      <div style={
        {
          position: "absolute",
          top: ".5rem",
          right: ".5rem"
        }
      }>
        {currentStepIndex + 1}/ {steps.length}

      </div>
      {currentStep}
      <div style={{marginTop: "1rem", display: "flex", justifyContent: "flex-end"}}>
        {!isFirstStep && <button type="button" onClick={back}>Back</button>}
        <button type="submit" >{isLastStep ? "Finish" : "Next"}</button>
      </div>
    </form>
  </div>
}

export default App
