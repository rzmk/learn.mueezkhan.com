import React from "react";

type CardTagProps = {
  text: string;
};

const CardButton = ({ text }: CardTagProps) => {
  return (
    <span
      className="mr-2 rounded-lg bg-zinc-200 px-2 dark:bg-zinc-700"
      key={text}
    >
      {text}
    </span>
  );
};

export default CardButton;
