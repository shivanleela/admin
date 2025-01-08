
import  { useState } from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Component/Login";
import Dashboard from "./Component/DashBoard";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div >
    
    {isLoggedIn ? (
      <Dashboard />
    ) : (
      <Login setIsLoggedIn={setIsLoggedIn} />
    )}

  </div>
  )
}

export default App
