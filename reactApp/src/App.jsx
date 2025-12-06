import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NavLinkBar from "./components/NavLinkBar.jsx"
import RecipePlanner from "./components/RecipePlanner.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <NavLinkBar />
        <div className="container mt-4">
        <Routes>
            <Route path="/" element={<RecipePlanner />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
        </div>
    </>
  )
}

export default App
