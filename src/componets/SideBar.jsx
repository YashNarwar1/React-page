import "../App.css";

function SideBar({ className, handleClose, sideNavIsOpen }) {
  return (
    <>
      {sideNavIsOpen && <div className="backdrop"></div>}

      <div className={className}>
        <main>
          <img
            src="https://www.lejhro.com/lejhro_logo_blue.png"
            alt="Lejhro company's icon it's basicall just name in weird fonts"
          />
          <button onClick={handleClose} id="close">
            X
          </button>
        </main>
        <section>
          <nav>
            <ul>
              <li>Innovations</li>
              <li>Bootcamp</li>
              <li>Business Serives</li>
              <li>Financial Servies</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Blogs</li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
}

export default SideBar;
