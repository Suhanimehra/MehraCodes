import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * ScrollAnimations utility - ensures GSAP ScrollTrigger stays refreshed across route changes.
 */
const ScrollAnimations = () => {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return null;
};

export default ScrollAnimations;