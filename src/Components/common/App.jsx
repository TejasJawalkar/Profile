import { Header } from "../common/Header";
import { HashRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";
import { PageNavigationHeader } from "./PageNavigationHeader";
import classNames from "classnames";
import "../Styles/App.css";
import "../../bootstrap.min.css";
import { AppRoutes } from "../Routes/AppRoutes";

function App() {
  return (
    <>
      <Container className={classNames("p-2")} fluid>
        <Router basename="">
          <Header />
          <div className={classNames("maincontent")}>
            <PageNavigationHeader />

            <AppRoutes />
          </div>
          <div></div>
          <div className="mt-3 fixed-bottom"></div>
        </Router>
      </Container>
    </>
  );
}

export default App;
