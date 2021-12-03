import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./ui/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Home />} />
          <Route path="/peoplex" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
