import { Translation, useTranslation } from "react-i18next";

type ImageProps = {
  src: string;
  alt?: string;
};

type TabProps = {
  heading: any;
  description: any;
  image?: ImageProps;
};

type Props = {
  heading: string;
  description: any;
  tabs: TabProps[];
};

export type Layout499Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Services = (props: Layout499Props) => {
  const { description, tabs } = {
    ...Layout499Defaults,
    ...props,
  } as Props;

  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="bg-black1 px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-softerBrown">
            {t("services.title")}{" "}
            <span className="gold-text1 underline decoration-softBrown">
              {t("services.goldText")}
            </span>
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-center gap-y-12 md:gap-x-12 lg:gap-x-20">
          {tabs.map((tab, index) =>
            index % 2 === 0 ? (
              <div key={index} className="grid md:grid-cols-2">
                <div className="text-left flex justify-center flex-col">
                  <h3 className="text-yellow mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {tab.heading}
                  </h3>
                  <p>{tab.description}</p>
                </div>
                <div className="flex justify-center items-center">
                  <img src={tab.image?.src} alt={tab.image?.alt} width="250" />
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex flex-col-reverse  md:grid md:grid-cols-2"
              >
                <div className="flex justify-center items-center ">
                  <img src={tab.image?.src} alt={tab.image?.alt} width="250" />
                </div>
                <div className="flex justify-center flex-col">
                  <h3 className="text-yellow mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {tab.heading}
                  </h3>
                  <p>{tab.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export const Layout499Defaults: Layout499Props = {
  description: (
    <Translation>{(t) => <h1>{t("services.subtitle")}</h1>}</Translation>
  ),
  tabs: [
    {
      heading: (
        <Translation>
          {(t) => <h1>{t("services.sections.section1.title")}</h1>}
        </Translation>
      ),
      description: (
        <Translation>
          {(t) => <h1>{t("services.sections.section1.description")}</h1>}
        </Translation>
      ),
      image: { src: "/Gif1.gif", alt: "website" },
    },
    {
      heading: (
        <Translation>
          {(t) => <h1>{t("services.sections.section2.title")}</h1>}
        </Translation>
      ),
      description: (
        <Translation>
          {(t) => <h1>{t("services.sections.section2.description")}</h1>}
        </Translation>
      ),
      image: { src: "/Gif2.gif", alt: "social media" },
    },
    {
      heading: (
        <Translation>
          {(t) => <h1>{t("services.sections.section3.title")}</h1>}
        </Translation>
      ),
      description: (
        <Translation>
          {(t) => <h1>{t("services.sections.section3.description")}</h1>}
        </Translation>
      ),
      image: { src: "/Gif3.gif", alt: "marketing" },
    },
    {
      heading: (
        <Translation>
          {(t) => <h1>{t("services.sections.section4.title")}</h1>}
        </Translation>
      ),
      description: (
        <Translation>
          {(t) => <h1>{t("services.sections.section4.description")}</h1>}
        </Translation>
      ),
      image: { src: "/Gif4.gif", alt: "ai" },
    },
  ],
};