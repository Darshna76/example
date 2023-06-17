import { useState } from "react";

const Form = () => {
    let [fullName,setFullName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [conPassword,setConPassword] = useState("");
   let [error,setError] = useState("");
   let [noError,setNoError] = useState("");
      
  function formSubmit(event) {
    event.preventDefault(event);
    if(!fullName||!email||!password||!conPassword){
        setError("Error: All Fields are mendentory");
        setNoError("");
        return;
    }
     if(password!==conPassword){
        setError("Error:Password and confirm password should be same");
        setNoError("");
        return;
    }
    if(fullName||email||password||conPassword||password===conPassword){
    setNoError("Successfully signed up!");
    setError("");
    return;
  }
}
    return (
        <div className="form">
         <form className="form-container">
            <h1>Signup</h1>
            <input type="text" id="name" placeholder="Full Name"
            onChange = {(event)=>setFullName(event.target.value)}
            />
             <br/>
            <input type="email" id="email" placeholder="Email"
            onChange = {(event)=>setEmail(event.target.value)}
            />
            <br/>
            <input type="password" id="password" placeholder="Password"
            onChange = {(event)=>setPassword(event.target.value)}
            />
             <br/>
            <input type="password" id="conPassword" placeholder="Confirm Password"
            onChange = {(event)=>setConPassword(event.target.value)}
            />
             <br/>
             {
            error&&
            < p className="error">{error}</p>
         }
         {
            noError&&
            <p className="noError">{noError}</p>
         }
             
            <button type="submit" 
            onClick={formSubmit}>Sign Up</button>
         </form>
         
         

        </div>
     
    )

}

export default Form;