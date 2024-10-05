import "bootstrap/dist/css/bootstrap.min.css"; 
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Product from "./Product"; // Correct import
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} /> {/* Changed this path */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;


