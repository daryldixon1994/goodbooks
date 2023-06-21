import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
function Login() {
  const [admin, setAdmin] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    axios
      .post("/api/admin/login", admin)
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("id", res.data.data.id);
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("isBanned", res.data.data.isBanned);
          localStorage.setItem("isVerified", res.data.data.isVerified);
          localStorage.setItem("isAdmin", res.data.data.isAdmin);
          navigate("/admin/dashboard");
        }
      })
      .catch((err) => console.dir(err));
  };
  return (
    <div className="min-h-[694px] p-auto flex items-center justify-center bg-[#1e293b]">
      <div className="login-container p-[50px]">
        <Form
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <Form.Field>
            <label>Email</label>
            <input placeholder="email" type="email" name="email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="" type="password" name="password" />
          </Form.Field>

          <Button
            type="submit"
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
