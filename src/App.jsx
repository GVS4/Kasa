import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rental from "./pages/Rental";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rental/:id" element={<Rental />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
