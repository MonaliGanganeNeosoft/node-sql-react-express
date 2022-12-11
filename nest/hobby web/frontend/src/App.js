import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Dashboard from "./components/dash/Dashboard";
import Navbar from "./components/Nav/Navbar";
import Product from "./components/Product/Product";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/Product" element={<Product />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
