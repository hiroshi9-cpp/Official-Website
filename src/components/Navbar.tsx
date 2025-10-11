import { Link } from "react-scroll";

const Navbar = () => {
  const sections = ["Home", "WorkExperience", "Resume", "Education", "Interests", "Contact"];
  return (
    <nav className="fixed top-0 w-full bg-cyber-dark bg-opacity-80 backdrop-blur-md z-50">
      <ul className="flex justify-center gap-6 p-4">
        {sections.map((section) => (
          <li key={section} className="hover:text-cyber-blue cursor-pointer transition">
            <Link to={section} smooth={true} duration={500}>
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;