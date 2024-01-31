// Importing axios for making HTTP requests
import axios from "axios";

// Base URL for the tasks API
const BASE_URL = "http://localhost:8080/api/tasks";

// TaskService class with methods to interact with the tasks API
class TaskService {
  // Method to get all tasks
  getAllTask() {
    return axios.get(BASE_URL);
  }

  // Method to save a new task
  saveTask(TaskData) {
    return axios.post(BASE_URL, TaskData);
  }

  // Method to update an existing task by ID
  updateTask(id, TaskData) {
    return axios.put(`${BASE_URL}/${id}`, TaskData);
  }

  // Method to get a task by ID
  getTaskById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  // Method to delete a task by ID
  deleteTask(id) {
    return axios.delete(BASE_URL + "/" + id);
  }
}

// Exporting an instance of the TaskService class as the default export
export default new TaskService();
