import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
// import ProductList from "./components/ProductList"
// import Delivery from "./components/"
import Footer from "./components/Footer"
import Menu from "./components/Menu"





function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />}/>
            <Route path="about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
