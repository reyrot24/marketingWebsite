import { images } from "@/constants/images";

type ImageProps = {
  src: string;
  alt?: string;
};

type CardBaseProps = {
  image: ImageProps;
  heading: string;
  description: string;
  link: string;
};

type Props = {
  description: string;
  cardsSmall: CardBaseProps[];
  cardsBig: CardBaseProps[];
};

export type Layout366Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Projects = (props: Layout366Props) => {
  const { description, cardsBig } = {
    ...Layout366Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="projects"
      className="bg-darkerBrown px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-brown">
            Il Mio Lavoro
          </h1>
          {description}
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {cardsBig.map((card, index) => (
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-darkerBrown order-first flex flex-col items-stretch border border-border-primary "
            >
              <div>
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between items-center p-6 md:p-12">
                <div>
                  <h1 className="font-bold text-xl mb-4 text-softerBrown">
                    {card.heading}
                  </h1>
                  {card.description}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout366Defaults: Layout366Props = {
  description:
    "Ecco una selezione di progetti che ho avuto il privilegio di realizzare:",
  cardsBig: [
    {
      image: {
        src: images.athenaGym.src,
        alt: images.athenaGym.alt,
      },
      heading: "Potenziare il Fitness con un Presenza Online Dinamica",
      link: "https://ssdcamathena.it",
      description:
        "Ho sviluppato un sito web ad alta energia per una palestra locale, progettato per motivare e coinvolgere sia i nuovi che gli attuali membri. Con una navigazione semplificata, orari dei corsi e funzionalità di prenotazione, questo sito web offre un'esperienza utente fluida, mettendo in mostra il marchio della palestra e incoraggiando la connessione con la comunità.",
    },
    {
      image: {
        src: images.mobilityExpress.src,
        alt: images.mobilityExpress.alt,
      },
      heading: "Hub Digitale per un'Attività Fiorente",
      link: "",
      description:
        "Per questo cliente, ho creato un sito web raffinato e professionale che mette in risalto i suoi servizi e l'identità del marchio. Caratterizzato da un layout intuitivo, offerte di servizi chiare ed elementi interattivi, questo sito è stato creato per creare fiducia, attrarre clienti e posizionare l'azienda come leader nel suo settore.",
    },
  ],
};
