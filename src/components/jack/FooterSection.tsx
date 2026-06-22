import { FadeIn } from "./FadeIn";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export function FooterSection() {
  return (
    <footer className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 pb-10" id ="contact">
      <div className="max-w-7xl mx-auto">
        {/* CTA */}
        <FadeIn y={40}>
          <h2
            className="
              hero-heading
              font-black
              uppercase
              leading-none
              tracking-tight
              text-white
              text-center
            "
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
            }}
          >
            Let's Build
            <br />
            Something Amazing
          </h2>
        </FadeIn>

        {/* Email */}
        <FadeIn delay={0.2} y={20}>
          <div className="mt-14 flex justify-center">
            <a
              href="mailto:nitingangwar667@gmail.com"
              className="
                flex items-center gap-3
                text-white/70
                hover:text-white
                transition-all
              "
            >
              <FaEnvelope size={20} />
              <span className="text-lg">
                nitingangwar667@gmail.com
              </span>
            </a>
          </div>
        </FadeIn>

        {/* Socials */}
        <FadeIn delay={0.3} y={20}>
          <div className="flex justify-center gap-8 mt-12">
            <a
              href="https://github.com/nitingangwar667-maker"
              target="_blank"
              rel="noreferrer"
              className="
                text-white/60
                hover:text-white
                hover:scale-110
                transition-all duration-300
              "
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/nitin-gangwar-5421a13a5/"
              target="_blank"
              rel="noreferrer"
              className="
                text-white/60
                hover:text-[#0A66C2]
                hover:scale-110
                transition-all duration-300
              "
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://www.instagram.com/?hl=en&deoia=1"
              target="_blank"
              rel="noreferrer"
              className="
                text-white/60
                hover:text-[#E4405F]
                hover:scale-110
                transition-all duration-300
              "
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="h-px bg-white/10 mt-16 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-sm">
            © 2026 Nitin . All rights reserved.
          </span>

          <span className="text-white/40 text-sm uppercase tracking-[0.2em]">
            Designed & Developed by Nitin
          </span>
        </div>
      </div>
    </footer>
  );
}
