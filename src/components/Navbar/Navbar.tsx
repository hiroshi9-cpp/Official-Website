import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const sections = ["Home", "Work Experience", "Resume", "Education", "Interests", "Contact"];

  return (
    <nav className={styles.navbar}>
      <span className={styles.brand}>DEFENSE // ACTIVATED</span>
      <ul className={styles.navList}>
        {sections.map((section, i) => (
          <li
            key={section}
            className={styles.navItem}
            style={{ "--i": i } as React.CSSProperties}
          >
            <Link
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              activeClass={styles.active}
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
