import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Component/Login'; 
import Dashboard from './Component/DashBoard';  
import SalesForm from './Component/SalesFrom';  
import SalesTable from './Component/SalesTable';  


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
  
        {!isLoggedIn ? (
          <Route path="" element={<Navigate to="/login" />} />
        ) : (
          <>
    
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/form" element={<SalesForm />} />
            <Route path="/table" element={<SalesTable />} />
          </>
        )}

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
