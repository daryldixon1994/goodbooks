import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import VerifyEmail from "./components/verify/VerifyEmail";
import Book from "./components/book/Book";
import PrivateRoute from "./components/routes/PrivateRoute";
import AuthRoute from "./components/routes/AuthRoute";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="register"
          element={
            <AuthRoute>
              <Register />
            </AuthRoute>
          }
        />
        <Route
          path="book"
          element={
            <PrivateRoute>
              <Book />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/verify-email" element={<VerifyEmail />} />
    </Routes>
  );
}

export default App;
