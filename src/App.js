import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Dashboard from "./features/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/tasks" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
