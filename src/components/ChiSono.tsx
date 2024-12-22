import clsx from "clsx";
import { Button } from "./ui/button";
import { Translation, useTranslation } from "react-i18next";

type Image = {
  src: string;
  alt?: string;
};

type ImageProps = {
  image: Image;
};

type Props = {
  description1: any;
  description2: any;
  description3: any;
  features: ImageProps[];
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ChiSono = (props: Header1Props) => {
  const { description1, description2, description3, features } = {
    ...Header1Defaults,
    ...props,
  } as Props;
  const { t } = useTranslation();
  return (
    <section
      id="aboutme"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-darkerBrown"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-brown">
              {t("aboutme.title")}{" "}
              <span className="gold-text1 underline decoration-softBrown">
                {t("aboutme.goldText")}
              </span>
            </h1>
            <div className="flex gap-2 flex-col">
              <p className="md:text-md">{description1}</p>
              <p className="md:text-md">{description2}</p>
              <p className="md:text-md">{description3}</p>
            </div>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <a
                href="https://calendly.com/reyrotaru1/webbyreybook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>{t("aboutme.button")}</Button>
              </a>
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
  description1: (
    <Translation>
      {(t) => <h1>{t("aboutme.description.first")}</h1>}
    </Translation>
  ),
  description2: (
    <Translation>
      {(t) => <h1>{t("aboutme.description.second")}</h1>}
    </Translation>
  ),
  description3: (
    <Translation>
      {(t) => <h1>{t("aboutme.description.third")}</h1>}
    </Translation>
  ),
  features: [
    {
      image: {
        src: "IMG_20210623_231200_476.JPG",
        alt: "Relume placeholder image 2",
      },
    },
    {
      image: {
        src: "IMG-20210810-WA0015.JPG",
        alt: "Relume placeholder image 3",
      },
    },
    {
      image: {
        src: "IMG-20220403-WA0023.JPG",
        alt: "Relume placeholder image 3",
      },
    },
  ],
};
