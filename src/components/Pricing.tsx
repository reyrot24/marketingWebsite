import { Translation, useTranslation } from "react-i18next";
import { BiCheck } from "react-icons/bi";
import { Button } from "./ui/button";

type PricingPlan = {
  planName: any;
  monthlyPrice: any;
  features: any[];
  forWho: any;
  cta: any;
};

type CustomProps = {
  title: any;
  subtitle: any;
  feature1: any;
  feature2: any;
  feature3: any;
  feature4: any;
  feature5: any;
};

type Props = {
  heading: any;
  goldText: any;
  description: any;
  pricingPlans: PricingPlan[];
  addon: CustomProps;
};

export type Pricing18Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Pricing = (props: Pricing18Props) => {
  const { heading, description, pricingPlans, addon } = {
    ...Pricing18Defaults,
    ...props,
  };

  const { t } = useTranslation();

  return (
    <section id="pricing" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-softerBrown">
            {heading}
            <span className="gold-text1 underline decoration-softBrown">
              {t("pricing.goldText")}
            </span>
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between border border-softBrown px-6 py-8 md:p-8 gap-4"
            >
              <div className="h-full">
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold md:text-lgs text-softBrown">
                    {plan.planName}
                  </h6>
                  <h1 className="my-2 text-2xl font-bold md:text-3xl lg:text-4xl text-yellow">
                    {plan.monthlyPrice}
                  </h1>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex flex-row">
                      <div className="mr-4 flex-none self-start">
                        <BiCheck className="size-6 text-softerBrown" />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-xl text-softerBrown mb-2">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="italic text-start">{plan.forWho}</div>
              <div>
                <a href="#contact">
                  <Button className="w-full">{plan.cta}</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex h-full flex-col justify-between border border-softerBrown px-6 py-8 md:p-8 gap-4">
          <div className="h-full">
            <div className="rb-6 mb-6 text-center md:mb-8">
              <h6 className="text-md font-bold md:text-xl text-softBrown">
                {addon.title}
              </h6>
              <h1 className="my-2 text-4xl font-bold md:text-7xl lg:text-8xl text-yellow">
                {addon.subtitle}
              </h1>
            </div>
            <div className="mb-8 grid grid-cols-1  font-bold text-xl gap-4 py-2">
              <div className="flex-row flex gap-2">
                <BiCheck className="size-6 text-softerBrown" />
                {addon.feature1}
              </div>
              <div className="flex-row flex gap-2">
                <BiCheck className="size-6 text-softerBrown" />
                {addon.feature2}
              </div>
              <div className="flex items-center gap-2">
                <BiCheck className="size-6 text-softerBrown" />
                {addon.feature3}
              </div>
              <div className="flex-row flex gap-2">
                <BiCheck className="size-6 text-softerBrown" />
                {addon.feature4}
              </div>
              <div className="flex-row flex gap-2">
                <BiCheck className="size-6 text-softerBrown" />
                {addon.feature5}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing18Defaults: Props = {
  heading: <Translation>{(t) => <h1>{t("pricing.title")}</h1>}</Translation>,
  goldText: (
    <Translation>{(t) => <h1>{t("pricing.goldText")}</h1>}</Translation>
  ),
  description: (
    <Translation>{(t) => <h1>{t("pricing.subtitle")}</h1>}</Translation>
  ),
  pricingPlans: [
    {
      planName: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package1.title")}</h1>}
        </Translation>
      ),
      monthlyPrice: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package1.price")}</h1>}
        </Translation>
      ),
      features: [
        <Translation>
          {(t) => <h1>{t("pricing.packages.package1.features.feature1")}</h1>}
        </Translation>,
        <Translation>
          {(t) => <h1>{t("pricing.packages.package1.features.feature2")}</h1>}
        </Translation>,
      ],
      forWho: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package1.forWho")}</h1>}
        </Translation>
      ),
      cta: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package1.cta")}</h1>}
        </Translation>
      ),
    },
    {
      planName: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package2.title")}</h1>}
        </Translation>
      ),
      monthlyPrice: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package2.price")}</h1>}
        </Translation>
      ),
      features: [
        <Translation>
          {(t) => <h1>{t("pricing.packages.package2.features.feature1")}</h1>}
        </Translation>,
        <Translation>
          {(t) => <h1>{t("pricing.packages.package2.features.feature2")}</h1>}
        </Translation>,
      ],
      forWho: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package2.forWho")}</h1>}
        </Translation>
      ),
      cta: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package2.cta")}</h1>}
        </Translation>
      ),
    },
  ],
  addon: {
    title: (
      <Translation>{(t) => <h1>{t("pricing.addon.title")}</h1>}</Translation>
    ),
    subtitle: (
      <Translation>{(t) => <h1>{t("pricing.addon.subtitle")}</h1>}</Translation>
    ),
    feature1: (
      <Translation>{(t) => <h1>{t("pricing.addon.feature1")}</h1>}</Translation>
    ),
    feature2: (
      <Translation>{(t) => <h1>{t("pricing.addon.feature2")}</h1>}</Translation>
    ),
    feature3: (
      <Translation>{(t) => <h1>{t("pricing.addon.feature3")}</h1>}</Translation>
    ),
    feature4: (
      <Translation>{(t) => <h1>{t("pricing.addon.feature4")}</h1>}</Translation>
    ),
    feature5: (
      <Translation>{(t) => <h1>{t("pricing.addon.feature5")}</h1>}</Translation>
    ),
  },
};
