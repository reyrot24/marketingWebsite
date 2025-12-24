import clsx from "clsx";
import { Button } from "./ui/button";
import { images } from "@/constants/images";

type Image = {
  src: string;
  alt?: string;
};

type ImageProps = {
  image: Image;
};

type Props = {
  description: string;
  features: ImageProps[];
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ChiSono = (props: Header1Props) => {
  const { description, features } = {
    ...Header1Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="aboutme"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-darkerBrown"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-brown">
              Chi Sono
            </h1>
            <div className="flex gap-2 flex-col">{description}</div>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button>Contattami</Button>
            </div>
          </div>
          <div className="md:flex md:flex-row gap-x-12  md:gap-x-8  lg:gap-x-12 hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className={clsx("w-full", {
                  "md:mt-[12.5%]": index === 1,
                  "md:mt-[25%]": index === 2,
                })}
              >
                <div className="rb-6 mb-6 w-full md:mb-8">
                  <img
                    src={feature.image.src}
                    alt={feature.image.alt}
                    className="w-full object-cover aspect-[2/3]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header1Defaults: Header1Props = {
  description:
    "Ciao! Sono Andrea, aka Rey, un programmatore e web developer di 23 anni con una passione per la tecnologia 💻, la scienza 🔬, la musica 🎸, le arti marziali 🥋 e lo sport 🏋🏻‍♂️. Da tutte queste passioni, ho imparato a padroneggiare le cose fondamentali e a superare i miei limiti. Metto la stessa energia e dedizione al servizio del mio lavoro digitale, aiutando marchi e professionisti a creare una presenza online di impatto. Sono specializzato nella creazione di siti web accattivanti, di web app full stack e applicazioni mobile. Che tu stia cercando di rinnovare la tua identità online, aumentare l'engagement o far crescere il tuo marchio, sono qui per trasformare le tue idee in realtà con un chiaro focus sui risultati.",
  features: [
    {
      image: {
        src: images.rey1.src,
        alt: images.rey1.alt,
      },
    },
    {
      image: {
        src: images.rey2.src,
        alt: images.rey2.alt,
      },
    },
    {
      image: {
        src: images.rey3.src,
        alt: images.rey3.alt,
      },
    },
  ],
};
