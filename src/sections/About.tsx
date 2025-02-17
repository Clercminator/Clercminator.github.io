"use client";

import { SectionHeader } from "./components/SectionHeader";
import { Card } from './components/Card'
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { books } from "@/data/index";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescripttIcon from "@/assets/icons/Typescript_logo_2020.svg";
import ReactIcon from "@/assets/icons/react-logo-svgrepo-com.svg";
import NextjstIcon from "@/assets/icons/nextjs-icon-svgrepo-com.svg";
import Html5Icon from "@/assets/icons/html-5-logo-svgrepo-com.svg";
import CSS3Icon from "@/assets/icons/css3-logo-svgrepo-com.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import GitIcon from "@/assets/icons/git-icon-logo-svgrepo-com.svg";
import PythonIcon from "@/assets/icons/python-svgrepo-com.svg";
import RIcon from "@/assets/icons/R_logo.svg";
import ChatGPTIcon from "@/assets/icons/ChatGPT_logo.svg";
import DockerIcon from "@/assets/icons/docker-logo-svgrepo-com.svg";
import ExcelIcon from "@/assets/icons/microsoft-excel-2013-logo-svgrepo-com.svg";
import MongoDBIcon from "@/assets/icons/mongodb-logo-svgrepo-com.svg";
import PostgreSQLIcon from "@/assets/icons/postgresql-logo-svgrepo-com.svg";
import RedisIcon from "@/assets/icons/redis-logo-svgrepo-com.svg";
import AzureIcon from "@/assets/icons/microsoft-azure-2-logo-svgrepo-com.svg";
import ShopifyIcon from "@/assets/icons/shopify-logo-svgrepo-com.svg";
import AnalyticsIcon from "@/assets/icons/google-analytics-3-logo-svgrepo-com.svg";
import AWSIcon from "@/assets/icons/aws-logo-logo-svgrepo-com.svg";
import FirebaseIcon from "@/assets/icons/firebase-1-logo-svgrepo-com.svg";
import FigmaIcon from "@/assets/icons/figma-1-logo-svgrepo-com.svg";

import { CardHeader } from "./components/CardHeader";
import { ToolboxItems } from "./components/ToolboxItems";
import { useState, useRef } from "react";
import { BackgroundGradient } from "./components/background-gradient";

const toolboxItems = [
  {
    title: "JavaScript",
    icontype: JavascriptIcon,
  },
  {
    title: "TypeScript",
    icontype: TypescripttIcon,
  },
  {
    title: "React",
    icontype: ReactIcon,
  },
  {
    title: "NextJS",
    icontype: NextjstIcon,
  },
  {
    title: "HTML5",
    icontype: Html5Icon,
  },
  {
    title: "CSS3",
    icontype: CSS3Icon,
  },
  {
    title: "Chrome",
    icontype: ChromeIcon,
  },
  {
    title: "Github",
    icontype: GithubIcon,
  },
  {
    title: "Git",
    icontype: GitIcon,
  },
  {
    title: "Python",
    icontype: PythonIcon,
  },
  {
    title: "R",
    icontype: RIcon,
  },
  {
    title: "ChatGPT",
    icontype: ChatGPTIcon,
  },
  {
    title: "Docker",
    icontype: DockerIcon,
  },
  {
    title: "MS Excel",
    icontype: ExcelIcon,
  },
  {
    title: "MongoDB",
    icontype: MongoDBIcon,
  },
  {
    title: "PostgreSQL",
    icontype: PostgreSQLIcon,
  },
  {
    title: "Redis",
    icontype: RedisIcon,
  },
  {
    title: "MS Azure",
    icontype: AzureIcon,
  },
  {
    title: "Shopify",
    icontype: ShopifyIcon,
  },
  {
    title: "Google Analytics",
    icontype: AnalyticsIcon,
  },
  {
    title: "AWS",
    icontype: AWSIcon,
  },
  {
    title: "Firebase",
    icontype: FirebaseIcon,
  },
  {
    title: "Figma",
    icontype: FigmaIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏽",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Mindfullness",
    emoji: "🧘🏽‍♂️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Sports",
    emoji: "⚽",
    left: "2%",
    top: "75%",
  },
  {
    title: "Podcasting",
    emoji: "🎙️",
    left: "45%",
    top: "70%",
  },
  {
    title: "Entrepreneurship",
    emoji: "💰",
    left: "55%",
    top: "25%",
  },
  {
    title: "Food",
    emoji: "🌮",
    left: "15%",
    top: "20%",
  },
  {
    title: "Hiking",
    emoji: "🧗🏼",
    left: "35%",
    top: "45%",
  },
  {
    title: "Movies",
    emoji: "🎥",
    left: "55%",
    top: "55%",
  },
];

export const AboutSection = () => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  // Function to handle book click and cycle through books
  const handleBookClick = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const currentBook = books[currentBookIndex];

  const constraintRef = useRef(null);

  return (
    <section className="">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse in my World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <p className="md:text-lg lg-text-xl text-white/60 mt-4 max-w-full max-auto text-center">
          My life story is a testament to the resilience, adaptability, and
          entrepreneurial spirit. Having migrated twice, from Venezuela to Chile
          and then to Argentina, I have not only survived but thrived in diverse
          environments, working in various roles to support myself since I was
          18. This journey has imbued me with a unique perspective on overcoming
          challenges and seizing opportunities.
        </p>
        <p className="md:text-lg lg-text-xl text-white/60 mt-4 max-w-full max-auto text-center">
          I graduated with honors from the University of Chile with a degree in
          Business Administration, and completed 90% of a master&apos;s degree
          in finance that I could not finish because of the money. During my
          time at university, I was actively involved in several extracurricular
          activities, including the student government and entrepreneurship
          endeavors.
        </p>
        <p className="md:text-lg lg-text-xl text-white/60 mt-4 max-w-full max-auto text-center">
          My entrepreneurial endeavors have honed my ability to identify
          opportunities, develop strategies, and execute plans with limited
          resources. Moreover, my desire to learn and grow, despite the
          hardships faced, shows my commitment to personal and professional
          excellence. My track record of consistently over-delivering,
          self-motivation, and analytical skills, complemented by a hands-on
          mentality, makes me key asset to any team. I am always eager to
          enhance my skills. I regularly update myself with new developments in
          any tool that may be useful.
        </p>
        <p className="md:text-lg lg-text-xl text-white/60 mt-4 max-w-full max-auto text-center">
          I innovate and I adapt, I am always learning, always changing. I want
          and will make the world a better place. I am a leader, an entrepreneur
          at heart.
        </p>

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
            {/* My Reads Card with Click Event */}
            <BackgroundGradient>
              <Card
                className="h-[320px] md:col-span-2 lg:col-span-1 cursor-pointer"
                onClick={handleBookClick}
              >
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives"
                  className="px-6 pt-6"
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image
                    src={currentBook.image}
                    alt={currentBook.title}
                    width={150}
                    height={200}
                  />
                  {/* <Image src={bookImage} alt="Book Cover" /> */}
                </div>
              </Card>
            </BackgroundGradient>

            {/* My Toolbox Card */}
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional solutions."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:60s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:35s]"
              />
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
            {/* Beyond the Code Card */}
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond my professional work."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Map Card */}
            <BackgroundGradient>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="Map"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image
                    src={smileMemoji}
                    alt="smiling emoji"
                    className="size-20"
                  />
                </div>
              </Card>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
};
