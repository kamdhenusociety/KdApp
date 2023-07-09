import "./styles.css";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../Home/HomePage";

const App = () => {
  const location = useLocation();

  return (
    <>
      {
        location.pathname === '/'? <HomePage/> :
        <>
        <NavBar />
        <Container style={{ marginTop: "12em" }}>
          <Outlet/>
        </Container>
        </>
      }
    </>
  );
}

export default observer(App);
