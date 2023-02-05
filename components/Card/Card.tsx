import React from "react";
import Image from "next/image";
import CardButton from "./CardButton";
import CardTag from "./CardTag";
import Link from "next/link";

type CardProps = {
  name: string;
  description: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
  priority?: boolean;
  newTab?: boolean;
  tags?: string[];
  buttons?: {
    text: string;
    link: string;
    color: string;
    newTab?: boolean;
  }[];
};

const Card = ({
  name,
  description,
  link,
  imgSrc,
  imgAlt,
  priority,
  newTab = true,
  tags,
  buttons,
}: CardProps) => {
  return (
    <div className="mb-4 flex h-min flex-col rounded-lg bg-white shadow-md transition ease-in-out hover:shadow-2xl dark:bg-zinc-900">
      {/* Image */}
      <Link href={link} target={newTab ? "_blank" : "_self"} rel="noreferrer">
        <div className="relative h-full w-full flex-1 p-24 md:h-full md:w-full">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill={true}
            sizes="(max-width: 768px) 25%,
            (max-width: 1200px) 50%,
            75%"
            className="absolute inset-0 flex h-full w-full rounded-t-lg object-cover transition duration-200 ease-in-out hover:rounded hover:outline hover:outline-4 hover:-outline-offset-2 hover:outline-blue-500 hover:brightness-105"
            priority={priority}
          />
        </div>
      </Link>
      {/* Text */}
      <div className="flex-shrink p-4">
        <h1 className="flex text-lg font-semibold dark:text-gray-50">{name}</h1>
        <p className="flex text-sm text-gray-500 dark:text-gray-300">
          {description}
        </p>
      </div>
      {/* Tags (if given) */}
      {tags && (
        <div className="ml-4 mr-4 mt-0 mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <CardTag text={tag} key={tag} />
          ))}
        </div>
      )}
      {/* Buttons (if given) */}
      {buttons && (
        <div className="mb-2 flex flex-row justify-center">
          {buttons.map((button) => (
            <CardButton
              text={button.text}
              color={button.color}
              link={button.link}
              newTab={button.newTab}
              key={button.text}
            />
          ))}
        </div>
      )}
      <div className="mb-2 flex flex-row justify-center">
        <CardButton
          text="Click here to view &#10132;"
          color="view"
          link={link}
          newTab={newTab}
        />
      </div>
    </div>
  );
};

export default Card;
