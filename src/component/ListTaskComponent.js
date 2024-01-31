import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskService from "../Service/TaskService";

const ListTaskComponent = () => {
  // State variable to store the array of tasks
  const [taskArray, setTaskArray] = useState([]);

  // Fetch all tasks when the component mounts
  useEffect(() => {
    getAllTask();
  }, []);

  // Function to fetch all tasks from the API
  function getAllTask() {
    TaskService.getAllTask()
      .then((res) => {
        setTaskArray(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }

  // Function to delete a task by ID
  function deleteTask(e, id) {
    e.preventDefault();
    TaskService.deleteTask(id)
      .then(() => getAllTask())
      .catch((e) => console.log(e));
  }

  return (
    <div className="container">
      {/* Link to navigate to the Add Task page */}
      <Link to={"/add-task"} className="btn btn-primary mb-2 mt-3" href="">
        Add Task
      </Link>
      <h2 className="text-center mb-4">List Task</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Task Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through the taskArray to display each task */}
          {taskArray.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                {/* Link to navigate to the Update Task page */}
                <Link
                  to={`/add-task/${task.id}`}
                  className="btn btn-info"
                  href=""
                >
                  Update
                </Link>{" "}
                {/* Button to delete a task */}
                <button
                  onClick={(e) => deleteTask(e, task.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTaskComponent;
