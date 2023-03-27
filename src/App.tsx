import { useState } from "react";
import "./app.css";
import FormInput from "./components/forminput";
import axios from "axios";

const App = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
  
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
  
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

 

  const onChange = (e:any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
 
 const handlesubmitbutton =async () => {
  const data =await axios.post("http://localhost:8080/user/auth/register", {
    
  email:values.email,
  password:values.password,
  username:"asdas"

}) 
  console.log('handle',data.data)

  alert(data.data.msg)
 
  
};

 

  return (
    <div className="app">
      <form >
        <h1>Create Account</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            
            onChange={onChange}
          />
        ))}
        <button onSubmit={handlesubmitbutton}>Submit</button>
      </form>
    </div>
  );
};

export default App;