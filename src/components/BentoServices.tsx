"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "@/constants/images";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  image: ImageProps;
  heading: string;
  description: string;
};

type Cards = {
  bigCard: SectionProps[];
  smallCard: SectionProps[];
};

type Props = {
  heading: string;
  description: string;
  sections: Cards[];
};

export type Layout370371Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const BentoServices = (props: Layout370371Props) => {
  const { sections } = { ...props, ...Layout370371Defaults };

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current;

    gsap.set(cards, { opacity: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // animation starts when the top of container is at 80% of viewport height
        end: "bottom 20%", // end (optional, depends on how you want it)
        toggleActions: "play none none reverse",
      },
    });

    tl.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2, // each card animates in sequence
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  // Reset refs on re-render
  cardsRef.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-8 md:grid md:grid-cols-4 items-start justify-center md:gap-y-4 md:gap-x-4"
    >
      {sections.map((section: any, i: number) =>
        i === 0 ? (
          <React.Fragment key={i}>
            {section.smallCard.map((card: any, index: number) => (
              <div
                ref={addToRefs}
                key={index}
                className="w-full h-full flex flex-col items-center justify-between text-center border border-softerBrown rounded-xl"
              >
                <div className="rb-6 mx-6 md:mx-8">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    width={100}
                    className="object-cover"
                  />
                </div>
                <div className="m-4">
                  <h3 className="mb-5 text-md font-bold md:mb-6 md:text-lg md:leading-[1.3] lg:text-xl">
                    {card.heading}
                  </h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
            {section.bigCard.map((card: any, index: number) => (
              <div
                ref={addToRefs}
                key={index}
                className="w-full h-full md:col-span-2 flex flex-col items-center text-center border border-softerBrown rounded-xl"
              >
                <div className="rb-6 mx-6 md:mx-8">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    width={150}
                    className="object-cover"
                  />
                </div>
                <div className="m-4">
                  <h3 className="mb-5 text-md font-bold md:mb-6 md:text-lg md:leading-[1.3] lg:text-xl">
                    {card.heading}
                  </h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ) : (
          <React.Fragment key={i}>
            {section.bigCard.map((card: any, index: number) => (
              <div
                ref={addToRefs}
                key={index}
                className="w-full h-full md:col-span-2 flex flex-col items-center text-center border border-softerBrown rounded-xl"
              >
                <div className="rb-6 mx-6 md:mx-8">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    width={150}
                    className="object-cover"
                  />
                </div>
                <div className="m-4">
                  <h3 className="mb-5 text-md font-bold md:mb-6 md:text-lg md:leading-[1.3] lg:text-xl">
                    {card.heading}
                  </h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
            {section.smallCard.map((card: any, index: number) => (
              <div
                ref={addToRefs}
                key={index}
                className="w-full h-full flex flex-col items-center justify-between text-center border border-softerBrown rounded-xl"
              >
                <div className="rb-6 mx-6 md:mx-8">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    width={100}
                    className="object-cover"
                  />
                </div>
                <div className="m-4">
                  <h3 className="mb-5 text-md font-bold md:mb-6 md:text-lg md:leading-[1.3] lg:text-xl">
                    {card.heading}
                  </h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default BentoServices;

const Layout370371Defaults: Props = {
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  sections: [
    {
      smallCard: [
        {
          image: images.services.WebDev,
          heading: "🌐 Web Development",
          description:
            "Siti moderni, veloci e responsive sviluppati con Next.js. Landing page, portfolio, e-commerce e soluzioni su misura.",
        },
        {
          image: images.services.Backend,
          heading: "🧩 Backend & Database",
          description:
            "Struttura dati avanzata con Supabase, dashboard personalizzate con CMS, autenticazione, CRUD e integrazioni API.",
        },
      ],
      bigCard: [
        {
          image: images.services.AI,
          heading: "🤖 AI Integration",
          description:
            "Integrazione di chatbot, automazioni con Make.com, generazione contenuti automatica e strumenti basati su intelligenza artificiale per migliorare il tuo flusso di lavoro.",
        },
      ],
    },
    {
      bigCard: [
        {
          image: images.services.SeoAnalytics,
          heading: "📈 SEO & Analytics",
          description:
            "Ottimizzazione SEO on-page (meta tag, keywords), sitemap XML, indicizzazione su Google, tracciamento visite con Google Analytics e Search Console.",
        },
      ],
      smallCard: [
        {
          image: images.services.Socials,
          heading: "📣 Social & Local Presence",
          description:
            "Gestione base dei social (IG, FB), configurazione Google My Business e inserimento nei motori di ricerca locali.",
        },
        {
          image: images.services.Maintenence,
          heading: "🛠️ Support & Maintenance",
          description:
            "Ti accompagno anche dopo la pubblicazione del sito. Offro supporto, aggiornamenti tecnici e materiali utili per renderti autonomo.",
        },
      ],
    },
  ],
};
