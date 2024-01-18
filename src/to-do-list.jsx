import "./todo.css";
import React, { useEffect } from "react";
import { deleteIcon, editIcon } from "./images/icons";
import { useDispatch, useSelector } from "react-redux";
import { valueUpdate } from "./redux/reducers/conditions.js";

const ToDo = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(valueUpdate("Tanuja"));
  }, []);

  const select = useSelector((state) => {
    return state;
  });

  console.log("select", select);
  return (
    <div>
      <div className="todo-container">
        <img src={require(`./images/${props.toDoDetails.taskImg}`)} alt="" />
        <div className="todo-details">
          <h1>{props.toDoDetails.taskName}</h1>
          <p>TotalHrs: {props.toDoDetails.TotalHrs}</p>
          <p>Status: {props.toDoDetails.status}</p>
        </div>
        <div className="flex justify-content-end">
          <button>{deleteIcon}</button>
          <button>{editIcon}</button>
        </div>
      </div>
    </div>
  );
};
export default ToDo;
