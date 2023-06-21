import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import AdminLayout from "./components/layout/AdminLayout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import VerifyEmail from "./components/verify/VerifyEmail";
import VerifyEmailAuthor from "./components/verify/VerifyEmailAuthor";
import Book from "./components/book/Book";
import PrivateRoute from "./components/routes/PrivateRoute";
import AuthRoute from "./components/routes/AuthRoute";
import UserRoute from "./components/routes/UserRoute";
import AuthorRoute from "./components/routes/AuthorRoute";
import AdminLogin from "./components/admin/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import UserProfile from "./components/user/UserProfile";
import AuthorProfile from "./components/author/AuthorProfile";
import BooksCollection from "./components/author/BooksCollection";
import AdminUsers from "./components/admin/AdminUsers";
import AdminAuthors from "./components/admin/AdminAuthors";
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
          path="book/:id"
          element={
            <PrivateRoute>
              <Book />
            </PrivateRoute>
          }
        />
        <Route
          path="user-profile"
          element={
            <UserRoute>
              <UserProfile />
            </UserRoute>
          }
        />
        <Route
          path="author-profile"
          element={
            <AuthorRoute>
              <AuthorProfile />
            </AuthorRoute>
          }
        />
        <Route
          path="myBooks"
          element={
            <AuthorRoute>
              <BooksCollection />
            </AuthorRoute>
          }
        />
      </Route>
      <Route path="/verify-email-user" element={<VerifyEmail />} />
      <Route path="/verify-email-author" element={<VerifyEmailAuthor />} />
      <Route path="/admin/" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="authors" element={<AdminAuthors />} />
      </Route>
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
