import { ReactNode } from "react"

type FormWrapperProps = {
 title: string,
 children: ReactNode
}

function FormWrapper({title, children}: FormWrapperProps){

return <div>
<h1 style={{textAlign: "center", margin: 0, marginBottom: "2rem"}}>{title}</h1>
<div style={{ display:"grid", gap: "1rem .5rem", justifyContent: "flex-Start", gridTemplateColumns: "auto minmax(auto, 480px)"}}>{children}</div></div>

}

export default FormWrapper