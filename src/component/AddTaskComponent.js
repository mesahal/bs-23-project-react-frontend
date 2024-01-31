import React, { useState, useEffect } from "react";
import TaskService from "../Service/TaskService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddTaskComponent = () => {
  // State variables to store user inputs
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("");

  // React Router hooks for navigation and extracting parameters from the URL
  const navigate = useNavigate();
  const { id } = useParams();

  // Bundle the input data from the user
  const TaskData = { title, description, status };

  // Function to send data to API and navigate when successful
  function saveTask(e) {
    e.preventDefault();

    // Check if all input fields are filled
    if (
      TaskData.title !== "" &&
      TaskData.description !== "" &&
      TaskData.status !== ""
    ) {
      // If 'id' is present in the parameter, update the task; else, save a new task
      if (id) {
        TaskService.updateTask(id, TaskData)
          .then(() => navigate("/tasks"))
          .catch((e) => console.log(e));
      } else {
        TaskService.saveTask(TaskData)
          .then(() => navigate("/tasks"))
          .catch((e) => console.log(e));
      }
    } else {
      alert("Please, fill in all inputs");
    }
  }

  // Function to determine the title based on whether it's an update or add operation
  function getTitle() {
    return id ? "Update Task" : "Add Task";
  }

  // Fetch task data if 'id' is present in the URL parameter
  useEffect(() => {
    if (id) {
      TaskService.getTaskById(id)
        .then((res) => {
          settitle(res.data.title);
          setdescription(res.data.description);
          setstatus(res.data.status);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">{getTitle()}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    type="text"
                    placeholder="Enter title"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    type="text"
                    placeholder="Enter description"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={status}
                    onChange={(e) => setstatus(e.target.value)}
                    type="status"
                    placeholder="Enter status"
                  />
                </div>
                <button
                  onClick={(e) => saveTask(e)}
                  className="btn btn-success"
                >
                  Save
                </button>{" "}
                <Link to={"/tasks"} className="btn btn-danger" href="">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskComponent;
