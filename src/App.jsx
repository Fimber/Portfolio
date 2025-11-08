import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import ScrollManager from "./components/ScrollManager";
import Footer from "./sections/Footer";

const App = () => (
  <>
    <Navbar />
    <ScrollManager />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
