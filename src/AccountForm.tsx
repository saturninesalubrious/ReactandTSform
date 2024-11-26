import FormWrapper from "./formWrapper"

type AccountData = {
 email: string,
 password: string,
}

type AccountDataFormProps = AccountData & {
 updateFields: (fields: Partial<AccountData>) => void}


function AccountForm({email, password, updateFields}: AccountDataFormProps ){
 return (
  <FormWrapper title={"Accountform"}>
  <label >Email</label>
  <input autoFocus required type="text" value={email} onChange={e => updateFields({email: e.target.value})} />
  <label >Password</label>
  <input autoFocus required type="text" value={password} onChange={e => updateFields({password: e.target.value})}/>
  </FormWrapper>
 )
}

export { AccountForm }