import { useEffect } from "react";
import "./Scrollbar.module.css";

const Scrollbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      // hue cycles from cyan → green → yellow
      const hue = 180 - scrollPercent * 100;

      // brightness slightly increases with scroll
      const brightness = 1 + scrollPercent * 0.5;

      document.documentElement.style.setProperty("--scroll-hue", hue.toString());
      document.documentElement.style.setProperty("--scroll-brightness", brightness.toString());
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // This component doesn’t render visible elements; it just controls styling
  return null;
};

export default Scrollbar;
