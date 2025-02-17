import React from "react";
import { Compare } from "./components/compare";

export function CompareMyself() {
  return (
    <div className="container">
      <div className="justify-items-center mt-20">
        <div className="border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 ">
          <Compare
            firstImage="/profile.jpg"
            secondImage="/David-AI.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[450px] w-[300px] md:h-[450px] md:w-[300px]"
            slideMode="hover"
          />
        </div>
      </div>
    </div>
  );
}
