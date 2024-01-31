// Importing necessary dependencies and components from React and the application
import React from "react";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import ListTaskComponent from "./component/ListTaskComponent";
import AddTaskComponent from "./component/AddTaskComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/RegisterComponent";
import Login from "./component/LoginComponent";

// Main App component
function App() {
  return (
    // Using BrowserRouter for client-side routing
    <BrowserRouter>
      {/* Header component rendered at the top of the app */}
      <HeaderComponent />

      {/* Main content container */}
      <div className="container">
        {/* Defining routes using the Routes component */}
        <Routes>
          {/* Route for user registration */}
          <Route path="/register" element={<Register />} />

          {/* Default route, rendering the Login component */}
          <Route path="/" element={<Login />} />

          {/* Route for displaying the list of tasks */}
          <Route path="/tasks" element={<ListTaskComponent />} />

          {/* Routes for adding a new task or editing an existing task */}
          <Route path="/add-task" element={<AddTaskComponent />} />
          <Route path="/add-task/:id" element={<AddTaskComponent />} />
        </Routes>
      </div>

      {/* Footer component rendered at the bottom of the app */}
      <FooterComponent />
    </BrowserRouter>
  );
}

// Exporting the App component as the default export
export default App;
