import React from "react";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import ListTaskComponent from "./component/ListTaskComponent";
import AddTaskComponent from "./component/AddTaskComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/RegisterComponent";
import Login from "./component/LoginComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<ListTaskComponent />} />
          <Route path="/add-task" element={<AddTaskComponent />} />
          <Route path="/add-task/:id" element={<AddTaskComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
