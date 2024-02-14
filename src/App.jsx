import { Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route
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
          element={
            <>
              <Programes />
            </>
          }></Route>
      </Routes>
    </>
  );
}

export default App;
