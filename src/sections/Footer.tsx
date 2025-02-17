import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "@/data";
import MagicButton from "./components/MagicButton";
import { BackgroundBeamsWithCollision } from "./components/background-beams-with-collision";

const Footer = () => {
  return (
    <footer className="w-full" id="contact">
      <BackgroundBeamsWithCollision className="">
        <div className="container">
          {/* background grid */}
          <div className="w-full absolute left-0 -bottom-60">
            <Image
              src="/footer-grid.svg"
              width={20}
              height={10}
              alt="grid"
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
              Ready to take <span className="text-purple">your</span> business
              to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
              Reach out to me and let&apos;s discuss how I can help you.
            </p>

            <Link
              href="mailto:dclerc@fen.uchile.cl"
              aria-label="Email David Clerc"
            >
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>

          {/* Footer Bottom Section */}
          <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">
              Copyright © 2025 David Clerc
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {socialMedia.map((info) => (
                <Link
                  key={info.id}
                  href={info.link}
                  aria-label={`Visit my ${info.img.split(".")[0]} page`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                    <img
                      src={info.img}
                      alt="icons"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </footer>
  );
};

export default Footer;
