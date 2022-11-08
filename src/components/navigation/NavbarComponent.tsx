import { BsChatRightDotsFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBell, FaSuitcase, FaUserAlt } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { RiGroupFill } from "react-icons/ri";

import "./navbar.css";

const NavbarComponent = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      url: "#",
      icon: <ImHome3 />,
    },
    {
      id: 2,
      name: "My Network",
      url: "#",
      icon: <RiGroupFill />,
    },
    {
      id: 3,
      name: "Jobs",
      url: "#",
      icon: <FaSuitcase />,
    },
    {
      id: 4,
      name: "Messaging",
      url: "#",
      icon: <BsChatRightDotsFill />,
    },
    {
      id: 5,
      name: "Notifications",
      url: "#",
      icon: <FaBell />,
    },
    {
      id: 6,
      name: "Profile",
      url: "#",
      icon: <FaUserAlt />,
    },
  ];
  return (
    <div className="navbar">
      <div className="linkedin_logo">
        <a href="/" className="linkedin_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="41"
            height="41"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </a>
      </div>
      <div className="searchbox">
        <div>
          {/* <div className="searchbox_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
          </div> */}
          <input placeholder="search" className="searchbox_input" />
        </div>
      </div>
      {/* LINKS */}
      <nav className="nav_links">
        <ul className="primary_links">
          {links.map((link) => (
            <li className="primary_nav_link" key={link.id}>
              <a href={link.url} className="single_link">
                <div
                  className="single_link_icon"
                  style={{ fontSize: "larger" }}
                >
                  {link.icon}
                </div>
                <span>{link.name}</span>
              </a>
            </li>
          ))}
          <li
            className="primary_nav_link"
            style={{ borderLeft: "1px solid rgba(0,0,0,0.08)" }}
          >
            <a className="single_link">
              <div className="single_link_icon">
                <BsFillGrid3X3GapFill />
              </div>
              <span>Work</span>
            </a>
          </li>
        </ul>

        {/* <div id="menu_toggler"></div> */}
      </nav>
    </div>
  );
};

export default NavbarComponent;
