import { useEffect } from "react";
import "./Scrollbar.module.css";

const Scrollbar = () => {
  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      // hue cycles from cyan → green → yellow
      const hue = 180 - scrollPercent * 100;

      // brightness slightly increases with scroll
      const brightness = 1 + scrollPercent * 0.5;

      document.documentElement.style.setProperty("--scroll-hue", hue.toString());
      document.documentElement.style.setProperty("--scroll-brightness", brightness.toString());
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // This component doesn’t render visible elements; it just controls styling
  return null;
};

export default Scrollbar;
