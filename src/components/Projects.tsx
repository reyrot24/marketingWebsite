import { Translation, useTranslation } from "react-i18next";

type ImageProps = {
  src: string;
  alt?: string;
};

type CardBaseProps = {
  image: ImageProps;
  heading: any;
  description: any;
  link: string;
};

type Props = {
  description: any;
  cardsSmall: CardBaseProps[];
  cardsBig: CardBaseProps[];
};

export type Layout366Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Projects = (props: Layout366Props) => {
  const { description, cardsSmall, cardsBig } = {
    ...Layout366Defaults,
    ...props,
  } as Props;
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="bg-darkerBrown px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-softerBrown">
            {t("projects.title")}{" "}
            <span className="gold-text1 underline decoration-softBrown">
              {t("projects.goldText")}
            </span>
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 ">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            {cardsBig.map((card, index) => (
              <div
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
                    <h3 className="text-yellow mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
                      {card.heading}
                    </h3>
                    <p>{card.description}</p>
                    <a href="">{card.link}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout366Defaults: Layout366Props = {
  description: (
    <Translation>{(t) => <h1>{t("projects.subtitle")}</h1>}</Translation>
  ),
  cardsBig: [
    {
      image: {
        src: "/Athena_Gym.png",
        alt: "Athena Gym",
      },
      heading: (
        <Translation>
          {(t) => <h1>{t("projects.projects.project1.title")}</h1>}
        </Translation>
      ),
      link: "",
      description: (
        <Translation>
          {(t) => <h1>{t("projects.projects.project1.description")}</h1>}
        </Translation>
      ),
    },
    {
      image: {
        src: "/Mobility_express.png",
        alt: "Mobility Express",
      },
      heading: (
        <Translation>
          {(t) => <h1>{t("projects.projects.project2.title")}</h1>}
        </Translation>
      ),
      link: "",
      description: (
        <Translation>
          {(t) => <h1>{t("projects.projects.project2.description")}</h1>}
        </Translation>
      ),
    },
  ],
};
