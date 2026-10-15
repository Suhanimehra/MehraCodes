import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setHasFinePointer(finePointer);

    if (!finePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!hasFinePointer || !isVisible) return null;

  return (
    <>
      {/* Central matte dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] w-1.5 h-1.5 rounded-full bg-foreground"
        style={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />

      {/* Outer follow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99] rounded-full border border-foreground/30 bg-foreground/5"
        animate={{
          x: mousePosition.x - (isHovered ? 20 : 14),
          y: mousePosition.y - (isHovered ? 20 : 14),
          width: isHovered ? 40 : isPressed ? 22 : 28,
          height: isHovered ? 40 : isPressed ? 22 : 28,
          borderColor: isHovered ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 30,
          mass: 0.6,
        }}
      />
    </>
  );
};

export default CustomCursor;