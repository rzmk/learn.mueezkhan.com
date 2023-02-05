import React from "react";

type CardButtonProps = {
  text: string;
  link: string;
  color: string;
  newTab?: boolean;
};

const getButtonColor = (color: string) => {
  // Default button colors
  const buttonColors = {
    ios: "#94A3B8",
    android: "#34D399",
  };

  return buttonColors[color] ?? color;
};

const CardButton = ({ text, link, color, newTab }: CardButtonProps) => {
  const buttonColor = getButtonColor(color);
  const handleMouseEnter = (e: any) => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Set the color and background color of the button based on whether the OS is in dark mode
    e.currentTarget.style.color = isDark ? "white" : "black";
    e.currentTarget.style.backgroundColor = buttonColor;
  };
  const handleMouseLeave = (e: any) => {
    // Reset the color and background color to their default values
    e.currentTarget.style.color = "inherit";
    e.currentTarget.style.backgroundColor = "inherit";
  };

  return (
    <a
      href={link}
      target={newTab ? "_blank" : "_self"}
      rel="noreferrer"
      className="ease focus:shadow-outline m-2 inline-block select-none rounded-md border px-4 py-2 text-black transition duration-500 focus:outline-none dark:text-white"
      role="button"
      style={{
        borderColor: buttonColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </a>
  );
};

export default CardButton;
