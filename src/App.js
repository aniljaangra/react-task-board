import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Dashboard from "./features/Dashboard/Dashboard";
import AddEditTask from "./features/AddEditTask/AddEditTask";
import TaskDetails from "./features/TaskDetails/TaskDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/tasks" element={<Dashboard />} />
          <Route path="/tasks/add" element={<AddEditTask />} />
          <Route path="/tasks/:taskId/edit" element={<AddEditTask />} />
          <Route path="/tasks/:taskId/details" element={<TaskDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
