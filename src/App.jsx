import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Grid from "./Components/Grid";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";
import AppProvider from "./Components/ContextApi";
import OnlineArtGallery from "./Components/Projects/OnlineArtGallery";
import Amazon from "./Components/Projects/Amazon";
import Portfolio from "./Components/Projects/Portfolio";
import Netflix from "./Components/Projects/Netflix";
import ScrollToTop from "./Components/ScrollToTop";
import Resume from "./Components/Resume";
import { useDarkMode } from "./Components/DarkContextApi";
function App() {
  const { darkMode } = useDarkMode();
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />{" "}
        {/* previously whenever i load the page it used to start
        from anywhere so i included this to start from top all the time */}
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <div
                className=" pb-2"
                style={{
                  backgroundColor: darkMode ? "#333" : "#a8e7fc",
                  color: darkMode ? "#a8e7fc" : "#333",
                }}
              >
                <Hero />
                <Grid />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/onlineartgallery" element={<OnlineArtGallery />} />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/netflix" element={<Netflix />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
