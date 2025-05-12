import { useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullname, setFullName] = useState(false)

  const handleFirstNameChange = (e) =>{
    setFirstName(e.target.value)
  }

   const handleLastNameChange = (e) =>{
    setLastName(e.target.value)
  }

  const handleSubmit = (event)=>{
     event.preventDefault();

    if(firstName && lastName){
      setFullName(true);
    }

 
  }


  return(

  <>
  
  <h1>Full Name Display</h1>

  <form onSubmit={handleSubmit}>

  <div>
  <label for ="FirstName">First Name:</label> 
  <input 
  type="text" id="FirstName" 
  name="FirstName" value={firstName} 
  placeholder="Enter your First Name"  
  onChange={handleFirstNameChange} 
  required/>
  </div>

  <div>
  <label for ="LastName">Last Name:</label> 
  <input type="text" id="LastName" 
  name="LastName" value={lastName} 
  placeholder="Enter your Last Name"  
  onChange={handleLastNameChange} required />  
  </div>

  <button type='submit'>Submit</button>

  </form>
  
  {fullname && <p>Full Name:{firstName} {lastName} </p>}
  </>

  )


}

export default App
