import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./components/common/Top-header";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import TourPackages from "./pages/TourPackages";
import VisitorInfo from "./pages/VisitorInfo";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/signIn";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <TopHeader />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetail />} />
            <Route path="/tour-packages" element={<TourPackages />} />
            <Route path="/visitor-info" element={<VisitorInfo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
