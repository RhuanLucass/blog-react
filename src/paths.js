// React Router Dom
import { BrowserRouter as Router, Routes, Route, ScrollRestoration, Navigate } from "react-router-dom";

// Pages
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Contact from "pages/Contact/Contact";
import Login from "pages/Login/Login";
import NotFound from "pages/NotFound/NotFound";
import Post from "pages/Post/Post";
import Profile from "pages/Profile/Profile";
import Search from "pages/Search/Search";
import ScrollToTop from "pages/ScrollToTop";


const Paths = () => {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contato" element={<Contact/>} />
          <Route path="/sobre" element={<About/>} />
          <Route path="/entrar" element={<Login/>} />
          <Route path="/perfil" element={<Profile/>} />
          <Route path="/buscar/:word_search" element={<Search/>} />
          <Route path="/post/:idPost" element={<Post/>} />
          <Route path="*" element={<NotFound  />} />
        </Routes>
      </Router>
    </>
  );
}

export default Paths;