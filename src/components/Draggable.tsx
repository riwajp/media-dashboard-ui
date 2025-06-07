"use client";

import React, { ReactNode } from "react";

type DraggableProps = {
  children: ReactNode;
};

const Draggable: React.FC<DraggableProps> = ({ children }) => {
  return (
    <div
      className="overflow-x-auto overflow-y-hidden no-scrollbar cursor-grab active:cursor-grabbing"
      onMouseDown={(e) => {
        const container = e.currentTarget;
        let isDown = true;
        let startX = e.pageX - container.offsetLeft;
        let scrollLeft = container.scrollLeft;

        const onMouseMove = (eMove: MouseEvent) => {
          if (!isDown) return;
          eMove.preventDefault();
          const x = eMove.pageX - container.offsetLeft;
          const walk = x - startX;
          container.scrollLeft = scrollLeft - walk;
        };

        const onMouseUp = () => {
          isDown = false;
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
