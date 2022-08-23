import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";


const NavBar = () => {
  let location = useLocation();

  let nav

  switch (location.pathname) {
    case "/":
      nav = <>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Get Statrted</Link>
      </>
      break;
    case "/signin":
      nav = <>
        <Link to="/signup">Sign Up</Link>
      </>
      break;
    case "/signup":
      nav = <>
        <Link to="/signin">Sign In</Link>
      </>
      break;
    default:
      nav = <>
        <Link to="/activities">My Activity</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/setting">Setting</Link>
      </>
      break;
  }

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src='./assets/logo.png' alt='logo' />
        EXTRACKS
      </Link>
      <nav>
        {nav}
      </nav>
    </div>
  );
};

export default NavBar;