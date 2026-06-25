import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import aminePortrait from "@/assets/amine.jpeg";

const NAV_LINKS = ["About", "Skills", "Services", "Projects", "Contact"];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const portraitLeft = useTransform(
    scrollYProgress,
    [0, 0.85],
    ["50%", "calc(100% - clamp(210px, 24vw, 420px))"],
  );
  const portraitTop = useTransform(scrollYProgress, [0, 0.85], ["54%", "64%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.82]);

  return (
    <section
      ref={heroRef}
      className="h-screen flex flex-col relative"
      style={{ overflowX: "clip" }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="
              text-[#D7E2EA]
              font-medium
              uppercase
              tracking-wider
              text-sm
              md:text-lg
              lg:text-[1.4rem]
              hover:opacity-70
              transition-opacity duration-200
            "
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Title */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 px-5 sm:px-8 md:px-10">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="
              font-black
              uppercase
              tracking-tight
              leading-none
              whitespace-nowrap
              w-full
              text-center
              text-[12vw]
              sm:text-[13vw]
              md:text-[14vw]
              lg:text-[15.5vw]
            "
          >
            <span className="hero-heading">Hi, </span>
            <span className="typewriter-title">i&apos;m nitin</span>
          </h1>
        </FadeIn>
      </div>

      {/* Description */}
      <div
        className="
          mt-auto
          flex
          justify-start
          items-end
          pb-7
          sm:pb-8
          md:pb-10
          px-6
          md:px-10
          relative
          z-20
        "
      >
        <FadeIn delay={0.35} y={20}>
          <p
            className="
              text-[#D7E2EA]
              font-light
              uppercase
              tracking-wide
              leading-snug
              max-w-[160px]
              sm:max-w-[220px]
              md:max-w-[260px]
            "
            style={{
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
            }}
          >
            computer science student & software developer building practical,
            modern applications
          </p>
        </FadeIn>
      </div>

      {/* Portrait */}
      <motion.div
        className="
          absolute
          z-10
          w-[260px]
          sm:w-[340px]
          md:w-[430px]
          lg:w-[500px]
        "
        style={{
          left: portraitLeft,
          top: portraitTop,
          scale: portraitScale,
          x: "-50%",
          y: "-50%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 72, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div
              className="
                aspect-[4/5]
                overflow-hidden
                rounded-[32px]
                sm:rounded-[42px]
                md:rounded-[52px]
                border
                border-white/15
                bg-white/5
                p-1.5
                shadow-[0_30px_100px_rgba(187,204,215,0.16)]
                backdrop-blur-sm
              "
            >
              <img
                src={aminePortrait}
                alt="Nitin Gangwar portrait"
                className="
                  h-full
                  w-full
                  select-none
                  rounded-[50px]
                  object-cover
                  object-[center_24%]
                  pointer-events-none
                  sm:rounded-[50px]
                  md:rounded-[50px]
                "
                draggable={false}
              />
            </div>
          </Magnet>
        </motion.div>
      </motion.div>
    </section>
  );
}
