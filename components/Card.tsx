import React from "react";
import Image from "next/image";

type CardProps = {
  name: string;
  description: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
  priority?: boolean;
  newTab?: boolean;
  tags?: string[];
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
}: CardProps) => {
  return (
    <a href={link} target={newTab ? "_blank" : "_self"} rel="noreferrer">
      <div className="mb-4 flex flex-col rounded-lg bg-white shadow-md transition ease-in-out hover:shadow-2xl dark:bg-zinc-900">
        {/* Image */}
        <div className="relative h-full w-full flex-1 p-24 md:h-full md:w-full">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill={true}
            sizes="(max-width: 768px) 25%,
            (max-width: 1200px) 50%,
            75%"
            className="absolute inset-0 flex h-full w-full rounded-lg object-cover transition duration-200 ease-in-out hover:brightness-105"
            priority={priority}
          />
        </div>
        {/* Text */}
        <div className="flex-1 p-4">
          <h1 className="flex text-lg font-semibold dark:text-gray-50">
            {name}
          </h1>
          <p className="flex text-sm text-gray-500 dark:text-gray-300">
            {description}
          </p>
        </div>
        {/* Tags (if given) */}
        {tags && (
          <div className="ml-4 mr-4 mt-0 mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span className="mr-2 rounded-lg bg-zinc-200 px-2 dark:bg-zinc-700">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default Card;
