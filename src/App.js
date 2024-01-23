import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login.jsx";
import User from "./components/userScreen.jsx";
import SignUp from "./components/sign-up-form.jsx";
import ToDo from "./components/to-do-list.jsx";
import { useDispatch } from "react-redux";
import { valueUpdate } from "./redux/reducers/conditions.js";

function App() {
  const toDoList = [
    {
      taskImg: "React-icon.svg.png",
      taskName: "React",
      status: "In-Progress",
      TotalHrs: "45h",
      index:0
    },
    {
      taskImg: "nodejs-1-logo.png",
      taskName: "Node.js",
      status: "New",
      TotalHrs: "35h",
      index:1
    },
    {
      taskImg: "Angular_full_color_logo.svg.png",
      taskName: "Angular",
      status: "Completed",
      TotalHrs: "22h",
      index:2
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(valueUpdate(toDoList));
  }, []);


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
