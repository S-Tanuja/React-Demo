import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./login.jsx";
import User from "./userScreen.jsx";
import SignUp from "./sign-up-form.jsx";
import ToDo from "./to-do-list.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/User" element={<User />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path='/ToDo' element = {<ToDo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
