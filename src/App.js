import "./App.css";
import { useState, useEffect } from "react";

import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
// import Services from "./components/Services/Services";
import Qualification from "./components/Qualification/Qualification";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Themes from "./components/Themes/Themes";
import HashLoader from "react-spinners/HashLoader";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("loading : " + loading);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading && (
        <div className="site_body">
          <HashLoader
            color="red"
            className="loader"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {!loading && (
        <>
          <Header />

          <main className="main">
            <Home />
            <Themes />
            <About />
            <Skills />
            {/* <Services /> */}
            <Qualification />
            <Work />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
        </>
      )}
    </>
  );
}

export default App;
