import React, { useState } from "react";

function Bg() {
  const [color, setColor] = useState("white");
  const buttons = [
    { id: 1, color: "red" },
    { id: 2, color: "blue" },
    { id: 3, color: "green" },
    { id: 4, color: "yellow" },
    { id: 5, color: "black" },
    { id: 6, color: "white" },
    { id: 7, color: "orange" },
    { id: 8, color: "purple" },
    { id: 9, color: "pink" },
    { id: 10, color: "brown" },
  ];

  const handleButtonClick = (buttonColor) => {
    setColor(buttonColor);
  };
  console.log(`bg-${color}`);
  return (
    <div
      style={{ backgroundColor: color, minHeight: "100vh", padding: "20px" }}
    >
      <h1>Background Changer</h1>
      <div className='flex space-x-2'>
        {buttons.map((button) => (
          <button
            key={button.id}
            style={{ backgroundColor: button.color }}
            onClick={() => handleButtonClick(button.color)}
          >
            {button.color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Bg;
