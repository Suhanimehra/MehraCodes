import React from "react";

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-background">
      {/* Subtle architectural hairline grid — very faint, no colored glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-40" />
    </div>
  );
};

export default BackgroundAnimation;