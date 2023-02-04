import React from "react";
import Card from "./Card";

type CardGridProps = {
  resources: any;
};

const CardGrid = ({ resources }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {resources.map((resource: any, index: number) => (
        <Card
          name={resource.name}
          description={resource.description}
          link={resource.link}
          imgSrc={resource.imgSrc}
          imgAlt={resource.imgAlt}
          key={resource.name}
          priority={index < 2}
          newTab={resource.newTab}
          tags={resource.tags}
        />
      ))}
    </div>
  );
};

export default CardGrid;
