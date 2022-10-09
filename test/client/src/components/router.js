import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';


function Way() {
  return (
    <Router>
    <div className="App">
        
           <Routes>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
                 
          </Routes>
          </div>
       </Router>
    
  );
}

export default Way;
