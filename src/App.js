import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SideBarMenu from "./components/SideBarMenu";
import Login from "./components/Login";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let name = "Hello World";
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      <Header onMenuClick={toggleSideBar} isSignedIn={false}/>
      <SideBarMenu openCallback={isSideBarOpen} onMenuClick={toggleSideBar} />
    </div>
  );
}

export default App;
