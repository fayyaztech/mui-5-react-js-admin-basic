import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import StudentList from "./screens/Student/StudentList";
import Template from "./layouts/Template";
import AddStudent from "./screens/Student/StudentAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Template mainPage={<Dashboard />} />}
        />
        <Route
          path="/students/list"
          element={<Template mainPage={<StudentList />} />}
        />
        <Route
          path="/students"
          element={<Template mainPage={<StudentList />} />}
        />
        <Route
          path="/dashboard"
          element={<Template mainPage={<Dashboard />} />}
        />
        <Route
          path="/dashboard"
          element={<Template mainPage={<Dashboard />} />}
        />
        <Route
          path="/Students/add"
          element={<Template mainPage={<AddStudent />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
