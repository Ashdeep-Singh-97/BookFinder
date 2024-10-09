
import Page from "./components/Page";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import BouncingBall from "./components/BouncingBall";

export default function App() {

  useGSAP(() => {
    gsap.to('.link', { opacity: 1, y: -100, delay: 2 })
  }, [])

  return (
    <Router>
            <Routes>
                <Route path="/" element={<BouncingBall />} />
                <Route path="/product" element={<Page />} />
            </Routes>
        </Router>
  );
}

