import FormWrapper from "./formWrapper"

type UserData = {
 firstName: string,
 lastName: string,
 age: string
}

type UserFormProps = UserData & {
updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({firstName, lastName, age, updateFields}: UserFormProps){
 return (
  <FormWrapper title={"Userform"}>
  <label >First name</label>
  <input autoFocus required type="text" value={firstName} onChange={e => updateFields({firstName: e.target.value})}/>
  <label >Last name</label>
  <input autoFocus required type="text" value={lastName} onChange={e => updateFields({lastName: e.target.value})}/>
  <label >Age</label>
  <input autoFocus required type="number" value={age} onChange={e => updateFields({age: e.target.value})} />
  </FormWrapper>
  
 )
}