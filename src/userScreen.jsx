import { useLocation } from "react-router-dom";
import ToDo from "./to-do-list";
import "./todo.css"

const User = () => {
  const location = useLocation();
  const toDoList = [
    {
      taskImg: "React-icon.svg.png",
      taskName: "React",
      status: "In-Progress",
      TotalHrs: "45h",
    },
    {
      taskImg: "nodejs-1-logo.png",
      taskName: "Node.js",
      status: "New",
      TotalHrs: "35h",
    },
    {
      taskImg: "Angular_full_color_logo.svg.png",
      taskName: "Angular",
      status: "Completed",
      TotalHrs: "22h",
    },
  ];
  return (
    <div>
      <h1>Hi, {location.state}</h1>
      <h2>Courses</h2>
      <div className="ab">
        {toDoList.map((todo,index)=>{
            return <ToDo key={index} toDoDetails = {todo}/>
        })

        }
    </div>
    
    </div>
  );
};

export default User;
