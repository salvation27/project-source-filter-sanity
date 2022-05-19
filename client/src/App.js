import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Detail from './pages/Detail/Detail'

function App() {
  return (
    <div className="app">
      <div className="app_nav">
        <Navbar />
      </div>
      <div className="app_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/posts/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
