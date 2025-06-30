import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Blogs from "./Blogs";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
import Contact from "./Contact";
import Footer from "./Footer";
// import Nav from "./Nav";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative">
              {/* <Nav /> */}
              <Element name="home">
                <Hero />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="projects">
                <Projects />
              </Element>
              <Element name="blog">
                <Blogs />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
              <Footer />
            </div>
          }
        />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
