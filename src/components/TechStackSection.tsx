"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiAirtable,
  SiTypescript,
  SiPython,
} from "react-icons/si";

type Tech = {
  name: string;
  // allow JSX icon, text emoji, or null
  icon?: React.ReactNode | string | null;
  image?: string;
  color?: string;
};

type Category = {
  title: string;
  tech: Tech[];
};

const categories: Category[] = [
  {
    title: "Frontend & UI",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" }, // white
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      {
        name: "Framer Motion",
        image: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
        color: "#FF5C8A",
      }, // pinkish accent
    ],
  },
  {
    title: "Backend & Database",
    tech: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
      { name: "Python", icon: <SiPython />, color: "#FFCA28" },
      { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
      {
        name: "Convex",
        image:
          "https://cdn.sanity.io/images/o0o2tn5x/production/285d09c87a0afb46b81044a49932f14539eb4778-400x400.png",
        color: "#336791",
      },
    ],
  },
  {
    title: "AI & Automation",
    tech: [
      {
        name: "n8n",
        image:
          "https://brandlogos.net/wp-content/uploads/2025/05/n8n_icon-logo_brandlogos.net_3mw34-512x270.png",
        color: "#FF4F6D",
      },
      {
        name: "Voiceflow",
        image:
          "https://camo.githubusercontent.com/90290c16b19257f6988db6c3199a633ce05d5b7345ade6f263bbeb1779ec547e/68747470733a2f2f63646e2e766f696365666c6f772e636f6d2f6173736574732f6c6f676f2e706e67",
        color: "#adadad",
      },
      {
        name: "Voice glow",
        image:
          "https://vg-bunny-cdn.b-cdn.net/branding/final512x512-convocore.png",
        color: "#fff",
      },
      { name: "Airtable", icon: <SiAirtable />, color: "#18BFFF" },
    ],
  },
  {
    title: "Design & Workflow",
    tech: [
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      { name: "Git", icon: "📦", color: "#aa8629" },
      { name: "Vercel", icon: "▲", color: "#ffffff" },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="px-[2%] py-16 md:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-brown">
            Stack di Sviluppo
          </h1>
          Questi sono i framework e strumenti che uso per sviluppare e portare a
          termini i progetti
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center bg-darkerBrown justify-between text-center border border-softerBrown rounded-xl p-6 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.tech.map((t, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex cursor-pointer items-center gap-2 bg-brown px-3 py-2 rounded-lg text-sm border border-white"
                    style={{ color: t.color }}
                  >
                    {t.icon ? (
                      <span className="text-lg " style={{ color: t.color }}>
                        {t.icon}
                      </span>
                    ) : (
                      <img
                        src={t.image}
                        width={100}
                        className="object-contain size-6"
                      />
                    )}
                    {t.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
