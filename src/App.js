import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gradients from "./pages/Gradients";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gradients" element={<Gradients />} />
        <Route path="/colors" element={<Navigate replace to="/" />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}
