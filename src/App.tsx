import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "src/components/Navbar";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
