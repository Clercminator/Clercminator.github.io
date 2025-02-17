import { gridItems } from "@/data";
//import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import dynamic from "next/dynamic";

// Dynamically import the default export for BentoGrid
const BentoGrid = dynamic(
  () => import("./components/BentoGrid").then((mod) => mod.BentoGrid),
  { ssr: false }
);

// Dynamically import the named export for BentoGridItem
const BentoGridItem = dynamic(
  () => import("./components/BentoGrid").then((mod) => mod.BentoGridItem),
  { ssr: false }
);

const Grid = () => {
  return (
    <section id="about" className="py-20">
      <BentoGrid className="container">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
