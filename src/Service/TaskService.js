import axios from "axios";

const BASE_URL = "http://localhost:8080/api/tasks";
class TaskService {
  //**Method to get all Task from our api or database */
  getAllTask() {
    return axios.get(BASE_URL);
  }
  /**MEthod to save Task */
  saveTask(TaskData) {
    return axios.post(BASE_URL, TaskData);
  }
  updateTask(id, TaskData) {
    return axios.put(`${BASE_URL}/${id}`, TaskData);
  }
  getTaskById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }
  deleteTask(id) {
    return axios.delete(BASE_URL + "/" + id);
  }
}
export default new TaskService();
