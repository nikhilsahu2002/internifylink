import { Route, Routes, Router } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import PreFooter from "./Components/PreFooter";
import Programe from "./Components/Programe";
import Programes from "./Components/Intership/Programes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <Nav />
                <Header />
                <Programe />
                <AboutUs />
                <Features />
                <PreFooter />
                <Footer />
              </>
            }
          />
          <Route
            path="/intership"
            exact
            element={
              <>
                <Programes />
              </>
            }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
