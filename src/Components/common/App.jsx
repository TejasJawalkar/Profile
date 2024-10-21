import "../../bootstrap.min.css";
import { Header } from "../common/Header";
import "../Styles/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { About } from "../About";
import { Services } from "../Services";
import { Contact } from "../Contact";
import { Container } from "reactstrap";
import classNames from "classnames";

function App() {
  

  return (
    <>
      <Container className={classNames("p-2")} fluid>
      <Router basename="">
        <Header />
        <div className={classNames("maincontent")}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </div>
        <div></div>
        <div className="mt-3 fixed-bottom">
          
        </div>
      </Router>
      </Container>
        <Container className={classNames("p-2")}>

        </Container>
    </>
  );
}

export default App;
