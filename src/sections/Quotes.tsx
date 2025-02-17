"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./components/InfiniteCards";

export function QuotesMoving() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={quotes} direction="right" speed="slow" />
    </div>
  );
}

const quotes = [
  {
    quote:
      "Create something today even if it sucks. Hope can never be a strategy. A focused fool can accomplish more than a distracted genius. I don't care how many times I fail, and I just need to be really right once.",
  },
  {
    quote: "Love is not a feeling. Love is what we do despite of what we feel.",
  },
  {
    quote:
      "Change is the essence of life; be willing to surrender what you are for what you could become. All change is hard at first, messy in the middle and gorgeous at the end.",
  },
  {
    quote:
      "You don't become confident by shouting affirmations in the mirror, but by having a stack of undeniable proof that you are who you say you are. Outwork your self-doubt.",
  },
  {
    quote:
      "The degree to which a person can grow is directly proportional to the amount of truth they can accept about themselves without running away.",
  },
  {
    quote:
      "Attention is the most valuable thing you have so Contemplate the price you pay for inaction. It's a justification for you to do things sooner rather than later.",
  },
];
