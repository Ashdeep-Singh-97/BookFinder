import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AckeeTracker from "ackee-tracker";
import Page from "./components/Page";
import BouncingBall from "./components/BouncingBall";

// Component to track route changes
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    const instance = AckeeTracker.create('http://localhost:3002', { detailed: true });
    instance.record('5579a14e-b091-405d-b764-e15695e7e704'); // Replace with your actual Domain ID from Ackee
  }, [location]); // Track whenever the route changes

  return null; // This component does not render anything
};

export default function App() {
  return (
    <Router>
      {/* Track route changes */}
      <RouteTracker />
      <Routes>
        <Route path="/" element={<BouncingBall />} />
        <Route path="/product" element={<Page />} />
      </Routes>
    </Router>
  );
}
