import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Template from "./screens/layouts/Template";
import StudentList from "./screens/Student/StudentList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Template mainPage={<Dashboard />} />} />
        <Route path="/students/list" element={<Template mainPage={<StudentList />} />} />
        <Route path="/students" element={<Template mainPage={<StudentList />} />} />
        <Route path="/dashboard" element={<Template mainPage={<Dashboard />} />} />
        <Route path="/dashboard" element={<Template mainPage={<Dashboard />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
