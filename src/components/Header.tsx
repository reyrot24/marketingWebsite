"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { images } from "@/constants/images";

type Props = {
  heading: string;
  description: string;
};

export type Header83Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header = (props: Header83Props) => {
  const { heading, description } = {
    ...Header83Defaults,
    ...props,
  } as Props;

  const { scrollYProgress } = useScroll();
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 1.2], [1, 0]); // Extended beyond 1
  const scale = useTransform(scrollYProgress, [0, 1], [2, 0]);

  return (
    <section id="home" className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full items-center justify-center"
          style={{ opacity: opacityContent }}
        >
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-brown">
                {heading}
              </h1>
              {description}
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <a href="#contact">
                  <Button>Contattami</Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 z-10 bg-black/50"
            style={{ opacity: opacityOverlay }}
          />
          <motion.div
            style={{ scale }}
            className="grid size-full auto-cols-fr grid-cols-1  md:grid-cols-3"
          >
            <img
              src={images.gold.src}
              alt={images.gold.alt}
              className="absolute inset-0 size-full object-cover"
            />
            <img
              src={images.gold.src}
              alt={images.gold.alt}
              className="absolute inset-0 size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Header83Defaults: Header83Props = {
  heading: "Costruire siti web che fanno la differenza.",
  description:
    "Sono specializzato nella creazione di siti web e app che non solo hanno un bell'aspetto, ma generano anche risultati. Portiamo il tuo marchio al livello successivo.",
};
