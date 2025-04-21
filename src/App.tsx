import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
//pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
