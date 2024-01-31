import React, { useState, useEffect } from "react";
import TaskService from "../Service/TaskService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddTaskComponent = () => {
  /** Variables and method to collect and store inputes */
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const TaskData = { title, description, status }; //bundle the inpute from user

  /**send data to api and navigate when succesful */
  function saveTask(e) {
    e.preventDefault();

    if (
      TaskData.title !== "" &&
      TaskData.description !== "" &&
      TaskData.status != ""
    ) {
      /**If id is present in the parameter, it should update else it should save */
      if (id) {
        TaskService.updateTask(id, TaskData)
          .then(navigate("/Task"))
          .catch((e) => console.log(e));
      } else {
        TaskService.saveTask(TaskData)
          .then(navigate("/Task"))
          .catch((e) => console.log(e));
      }
    } else {
      alert("Please, fill in all inputes");
    }
  }

  function tile() {
    if (id) {
      return "Update Task";
    } else {
      return "Add Task";
    }
  }
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
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">{tile()}</h2>
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
                <Link to={"/Task"} className="btn btn-danger" href="">
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
