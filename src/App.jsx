import './App.css'

function App() {

  return(

  <>
  <h1>Full Name Display</h1>
  <div>
  <label for ="FirstName">First Name:</label> 
  <input type="text" id="FirstName" name="FirstName"/>
  </div>

  <div>
  <label for ="LastName">Last Name:</label> 
  <input type="text" id="LastName" name="LastName"/>  
  </div>
  
  <button>Submit</button>
  <p>Full Name: </p>
  </>

  )


}

export default App
