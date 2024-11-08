import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import BouncingBall from "./components/BouncingBall";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BouncingBall />} />
        <Route path="/product" element={<Page />} />
      </Routes>
    </Router>
  );
}
