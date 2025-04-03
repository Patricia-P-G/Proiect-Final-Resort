import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p>
            We are a luxury resort offering the best experience for our guests.
            Enjoy our world-class amenities and services.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/" className={styles.footerLink}>
                Home
              </a>
            </li>
            <li>
              <a href="/our-rooms" className={styles.footerLink}>
                Our Rooms
              </a>
            </li>
            <li>
              <a href="/about-us" className={styles.footerLink}>
                About Us
              </a>
            </li>
            <li>
              <a href="/gallery" className={styles.footerLink}>
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Info</h3>
          <p>Rawai, Mueang Phuket District, Phuket 83100, Thailand</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: info@luxuryresort.com</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Sunset Breeze Resort. All rights reserved.</p>
      </div>
    </footer>
  );
}