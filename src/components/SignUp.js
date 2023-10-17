import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      alert("Created account successfully!");
      navigate("/");
    } catch (error) {
      console.log(error.code)
      let message = error.code.toString();
      alert("Login error: " +
        error.code
          .split("-")
          .join(" ")
          .split("/")[1]
      );
    }
  };

  const handleToLogin = () =>{
    navigate("/login");
  }
  return (
    <Container>
      <div className="login-module">
        <h1>Register to Youtube (Clone)</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-and-label">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="input-and-label">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="to-login">
          <p onClick={handleToLogin}>Login instead</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-module {
    width: 500px;
    min-height: 300px;
    border-radius: 1em;
    box-shadow: 10px 10px 43px 0px rgba(0, 0, 0, 0.36);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;

    h1 {
      font-size: 24px;
    }

    form {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;

      .input-and-label {
        width: 300px;
        display: flex;
        justify-content: space-between;
        padding: 0em 1em;
      }

      button {
        padding: 10px 20px;
        border-radius: 12px;
        border: none;
        background-color: #ed4646;
        color: white;
        font-size: 15px;

        &:hover {
          background-color: #b53636;
          cursor: pointer;
        }
      }
    }

    .to-login {
      width: 300px;
      display: flex;
      justify-content: flex-end;
      margin-top: 50px;
      font-size: 14px;
      color: #0000ff;

      p {
        cursor: pointer;
      }
    }
  }
`;
