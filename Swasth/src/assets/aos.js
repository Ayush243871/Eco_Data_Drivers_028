// src/utils/aos.js
import AOS from "aos";
import "aos/dist/aos.css";


const initAOS = () => {
  AOS.init({
    duration: 1200, // Animation duration in milliseconds
    offset: 200, // Offset (in px) from the original trigger point
    once: true, // Whether animation should happen only once
  });
};

export default initAOS;
