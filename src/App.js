import { Container } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import "./bootstrap.min.css";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import About from "./components/screen/About.jsx"
import HomeScreen from "./components/screen/Home.jsx"
import ServicesScreen from "./components/screen/Services.jsx"
import ContactScreen from "./components/screen/ContactMe.jsx"



function App() {
  return (
    <>
      <Container className="content" fluid>

        <main>
          <Container>
            <BrowserRouter>
              <Header />
              <div className="dropdown-divider"></div>
              <Routes>
                <Route exact path="/Profile" element={<HomeScreen />} />
                <Route exact path="/home" element={<HomeScreen />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/services" element={<ServicesScreen />} />
                <Route exact path="/contact" element={<ContactScreen />} />
              </Routes>
            </BrowserRouter>

          </Container>
        </main>
        <div className="dropdown-divider"></div>
        <Footer />

      </Container>
    </>
  );
}

export default App;
