import "../todo.css";
import React, { useEffect, useState } from "react";
import { deleteIcon, editIcon } from "../images/icons";
import { useDispatch, useSelector } from "react-redux";
import { valueDelete } from "../redux/reducers/conditions";
import MyDialog from "./courseDialog";

const ToDo = () => {
  const select = useSelector((state) => {
    return state.updatestring.toDoList || [];
  });

  const dispatch = useDispatch();

  const [openDialogIndex, setOpenDialogIndex] = useState(null);

  const handleOpenDialog = (index) => {
    setOpenDialogIndex(index);
  };

  const handleCloseDialog = (index) => {
    setOpenDialogIndex(null);
  };
  return (
    <div>
      {select.map((todo, index) => {
        return (
          <div className="todo-container">
            <img src={require(`../images/${todo.taskImg}`)} alt="" />
            <div className="todo-details">
              <h1>{todo.taskName}</h1>
              <p>TotalHrs: {todo.TotalHrs}</p>
              <p>Status: {todo.status}</p>
            </div>
            <div className="flex justify-content-end">
              <button
                onClick={() => {
                  dispatch(valueDelete(index));
                }}
              >
                {deleteIcon}
              </button>
              <button onClick={() => handleOpenDialog(index)}>
                {editIcon}
              </button>
              <MyDialog
                open={openDialogIndex === index}
                onClose={handleCloseDialog}
                data={todo}
              />
            </div>
          </div>
        );
      })}
      <button
        className="button-styling"
        onClick={()=>{handleOpenDialog(select.length)}}
      >
        Add Course +{" "}
      </button>
      <MyDialog
                open={openDialogIndex === select.length}
                onClose={handleCloseDialog}
                data={select.length}
              />
    </div>
  );
};
export default ToDo;
