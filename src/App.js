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
import Download from "./pages/Download";
import C, { FetchColor } from "./pages/C";
import G from "./pages/G";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gradients" element={<Gradients />} />
        <Route path="/download" element={<Download />} />
        <Route path="/download/c" element={<C />}>
          <Route path=":colorName" element={<FetchColor />} />
        </Route>
        <Route path="/download/g" element={<G />} />
        <Route path="/colors" element={<Navigate replace to="/" />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}
