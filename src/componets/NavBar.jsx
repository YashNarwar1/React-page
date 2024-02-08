import "../App.css";
import image from "../assets/icons8-open-menu-96.png";

function MainNavBar({ handleClick }) {
  return (
    <>
      <header>
        <nav id="main-nav">
          <img
            id="logo"
            src="https://www.lejhro.com/lejhro_logo_white.png"
            alt="logo of Lejhro company"
          />
          <ul>
            <li>
              <a href="#"> Innovations</a>
            </li>
            <li>
              <a href="#"> Business Services</a>
            </li>
            <li>
              <a href="#"> Financial Services</a>
            </li>
            <li>
              <a href="#"> Bootcamps</a>
            </li>
          </ul>
          <button onClick={handleClick} id="side-menu">
            <img src={image} />
          </button>
        </nav>

        <h1>Blogs</h1>
      </header>
    </>
  );
}

export default MainNavBar;
