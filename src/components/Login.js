import React, { useState } from "react";
import styled from "styled-components";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission and authentication here
    console.log("form submitted")
  };
  return (
    <Container>
      <div className="login-module">
        <h1>Login to Youtube (Clone)</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-and-label">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-and-label">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
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

        &:hover{
            background-color: #b53636;
            cursor: pointer;
        }
      }
    }
  }
`;
