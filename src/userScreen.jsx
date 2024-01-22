import { useLocation } from "react-router-dom";
import ToDo from "./to-do-list";
import "./todo.css"

const User = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Hi, {location.state}</h1>
      <h2>Courses</h2>
      <div className="ab">
      <ToDo/>
    </div>
    </div>
  );
};

export default User;
