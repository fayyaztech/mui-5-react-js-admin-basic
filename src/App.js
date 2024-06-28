import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import StudentList from "./screens/Student/StudentList";
import Template from "./layouts/Template";


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
