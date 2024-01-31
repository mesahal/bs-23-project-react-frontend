import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskService from "../Service/TaskService";

const ListTaskComponent = () => {
  const [TaskArray, setTaskArray] = useState([]);

  useEffect(() => {
    getAllTask();
  }, []);

  function getAllTask() {
    TaskService.getAllTask()
      .then((res) => {
        setTaskArray(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }
  function deleteTask(e, id) {
    e.preventDefault();
    TaskService.deleteTask(id)
      .then(() => getAllTask())
      .catch((e) => console.log(e));
  }

  return (
    <div className="container">
      <Link to={"/add-Task"} className="btn btn-primary mb-2 mt-3" href="">
        Add Task
      </Link>
      <h2 className="text-center mb-4">List Task</h2>
      <table className="table table-bordered table striped">
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
          {TaskArray.map((Task) => (
            <tr id={Task.id}>
              <td>{Task.id}</td>
              <td>{Task.title}</td>
              <td>{Task.description}</td>
              <td>{Task.status}</td>
              <td>
                <Link
                  to={`/add-Task/${Task.id}`}
                  className="btn btn-info"
                  href=""
                >
                  Update
                </Link>{" "}
                <a
                  onClick={(e) => deleteTask(e, Task.id)}
                  className="btn btn-danger"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTaskComponent;
