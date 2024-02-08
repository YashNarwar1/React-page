import { useEffect, useState } from "react";
import Footer from "./componets/Footer";
import MainBody from "./componets/MainBody";
import MainNavBar from "./componets/NavBar";
import SideBar from "./componets/SideBar";
import "./App.css";

function App() {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

  function handleSideNav() {
    setSideNavIsOpen((prevValue) => !prevValue);
  }
  const Classes = "side-bar";
  const navOpenClass = sideNavIsOpen ? Classes + " opened" : Classes;

  useEffect(() => {
    if (sideNavIsOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [sideNavIsOpen]);

  return (
    <>
      <SideBar
        sideNavIsOpen={sideNavIsOpen}
        handleClose={handleSideNav}
        className={navOpenClass}
      />
      <MainNavBar handleClick={handleSideNav} />
      <MainBody />
      <Footer />
    </>
  );
}

export default App;
