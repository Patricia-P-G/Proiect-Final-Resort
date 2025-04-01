import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/img-main/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  // Meniul de deschidere/ inchidere pentru mobile
  function toggleMenu() {
    if (isMobile) {
      setMenuOpen(!menuOpen);
    }
  }

  useEffect(() => {
    function handleResize() {
      // Meniul se inchide la redimensionarea peste 768px
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    }

    function handleScroll() {
      // Setez starea de scroll
      const scrollPosition = window.scrollY;
      // Cand utilizatorul face scroll in jos peste 100px
      setScrolling(scrollPosition > 100);
      // Cand meniul este deschis si utilizatorul face scroll in sus peste 10px - meniul se inchide
      if (menuOpen && scrollPosition > 10) {
        setMenuOpen(false);
      }
    }

    // Elimin event listeners pentru a evita memory leaks
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`${styles.navbar} ${scrolling ? styles.transparent : ""} ${
        scrolling ? styles.hidden : ""
      }`}
    >
      {/* Logo-ul */}
      <div className={styles["navbar-logo"]}>
        <img
          src={logo}
          alt="logo"
          className={styles.logo}
          onClick={() => navigate("/")}
        />
      </div>

      {/* Meniul de navigatie */}
      <ul
        className={`${styles["navbar-menu"]} ${
          menuOpen && isMobile ? styles.active : ""
        }`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/our-rooms">Our Rooms</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>

      {/* Butonul de Book Now */}
      <div className={styles["navbar-book"]}>
        <button
          className={styles["book-button"]}
          onClick={() => navigate("/book-now")}
        >
          Book Now
        </button>
      </div>

      {/* Iconita hamburger pe dimensiunea mobile*/}
      <div
        className={`${styles.hamburger} ${!isMobile ? styles.hidden : ""}`}
        onClick={toggleMenu}
      >
        <span className={`material-symbols-outlined ${styles.hamburgerIcon}`}>
          menu
        </span>
      </div>
    </nav>
  );
}
