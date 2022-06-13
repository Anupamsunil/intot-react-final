import React from 'react';

import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

import Header from './Pages/Header';
import Form from './Pages/Form';
import  Login from './Pages/Login';





function App(){

  return(
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route exact path="/form" element={<Form />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;