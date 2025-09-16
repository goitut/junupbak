import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import Login from "./components/Login"
import Create from "./components/Create"
import Cart from "./components/Cart"
import Dashboard from "./components/Dashboard"





function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />}/>
            <Route path="about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
