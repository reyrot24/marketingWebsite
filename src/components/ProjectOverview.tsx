"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

type ProjectOverviewProps = {
  description?: string;
  projectSteps?: {
    step: string;
    title: string;
    description: string;
    color: string;
    cardInfo: string;
  }[];
} & React.ComponentPropsWithoutRef<"section">;

const ProjectOverview = (props: ProjectOverviewProps) => {
  const { description, projectSteps } = {
    ...ProjectOverviewDefaults,
    ...props,
  } as ProjectOverviewProps;
  const containerRef = useRef<HTMLDivElement>(null); // Questo è il ref per la sezione delle card
  const pathRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      gsap.set(cardsRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotation: -5,
      });

      cardsRef.current.forEach((card) => {
        gsap.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        });
      });

      if (pathRef.current && containerRef.current) {
        const path = pathRef.current;
        const pathLength = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        ScrollTrigger.create({
          trigger: containerRef.current, // <-- USA IL REF CORRETTO!
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          /* markers: true, */ // Ora i marker saranno posizionati correttamente
          onUpdate: (self) => {
            const drawLength = pathLength * self.progress;
            gsap.set(path, { strokeDashoffset: pathLength - drawLength });
          },
        });
      }

      const timeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100); // Ritardo di 100ms per dare tempo al layout di assestarsi

      return () => clearTimeout(timeout); // Pulizia del timeout
    },
    { dependencies: [], scope: containerRef }
  ); // Puoi opzionalmente definire lo scope

  return (
    <section className="relative min-h-full bg-darkerBrown" id="overview">
      {/* SVG Path Overlay */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1000 3000"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 200 100 C 400 300, 600 500, 500 800 
             S 600 1400, 400 1800 
             S 800 2200, 520 2650, C 450 2750, 550 2800, 500 2900"
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
        />
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#7c5835" />
            <stop offset="30%" stopColor="#4c2b21" />
            <stop offset="60%" stopColor="#2e1915" />
            <stop offset="90%" stopColor="#4c2b21" />
            <stop offset="100%" stopColor="#7c5835" />
          </linearGradient>
        </defs>
      </svg>

      {/* Cards */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-brown">
            Project Overview
          </h1>
          <p className="text-xl  max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="max-w-6xl mx-auto relative" ref={containerRef}>
          {projectSteps?.map((project, index) => (
            <div key={index} className="mb-32 last:mb-16">
              <div
                className={`flex justify-center ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <div
                  ref={(el) => el && (cardsRef.current[index] = el)}
                  className={`${project.color} flex justify-between items-center flex-col bg-gradient-to-b rounded-2xl p-8 w-full max-w-md h-80 shadow-2xl relative overflow-hidden`}
                >
                  <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {project.step}
                  </span>
                  <h1 className="text-white italic mb-5 text-md font-bold md:mb-6 md:text-lg md:leading-[1.3] lg:text-2xl">
                    {project.title}
                  </h1>
                  <p className="text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-row">
                    {Array.from({ length: index + 1 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full bg-darkBrown"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;

const ProjectOverviewDefaults = {
  description: "Ecco i passi per portare a termine un progetto:",
  projectSteps: [
    {
      step: "Step 1",
      title: "Ricerca",
      description:
        "Capisco di cosa il cliente ha bisogno, analizzo il mercato / competitor e definisco i requisiti del progetto attraverso ricerca approfondita",
      color: "from-softerBrown to-brown",
    },
    {
      step: "Step 2",
      title: "Design & Pianificazione",
      description:
        "Creo prototipi e un'architettura del progetto dettagliata per stabilire una solida base per lo sviluppo.",
      color: "from-brown to-darkerBrown",
    },
    {
      step: "Step 3",
      title: "Sviluppo & Costruzione",
      description:
        "Sviluppo il progetto usando tecnologie moderne, seguendo migliori pratiche e mantenendo codice di qualità",
      color: "from-darkerBrown via-brown to-darkerBrown",
    },
    {
      step: "Step 4",
      title: "Testing & Garanzia di qualità",
      description:
        "Rigorosa fase di testing, mediante il feedback dell'utente e test di integrazione, per garantire affidabilità.",
      color: "from-darkerBrown to-brown",
    },
    {
      step: "Step 5",
      title: "Lancio & Deploy",
      description:
        "Distribuzione strategica in ambienti di produzione con monitoraggio, analisi e ottimizzazione delle prestazioni.",
      color: "from-brown to-softerBrown",
    },
  ],
};
