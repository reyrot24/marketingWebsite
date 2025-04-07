import { Translation, useTranslation } from "react-i18next";
import { BiCheck } from "react-icons/bi";
import { Button } from "./ui/button";

type Skill = {
  title: any;
  features: any[];
};

type Skills = {
  website: Skill;
  marketing: Skill;
  ai?: Skill;
};

type PricingPlan = {
  planName: any;
  monthlyPrice: any;
  skills: Skills[];
  bonus: Skill;
  forWho: any;
  cta: any;
};

type CustomProps = {
  title: any;
  subtitle: any;
  feature1: any;
  feature2: any;
  feature3: any;
};

type Options = {
  title: any;
  subtitle: any;
  price: any;
};

type AddOnProps = {
  title: any;
  price: any;
  options: Options[];
  cta: any;
};

type Props = {
  heading: any;
  goldText: any;
  description: any;
  pricingPlans: PricingPlan[];
  custom: CustomProps;
  addOn: AddOnProps;
};

export type Pricing18Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Pricing = (props: Pricing18Props) => {
  const { heading, description, pricingPlans, custom, addOn } = {
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between border border-softBrown px-6 py-8 md:p-8 gap-4"
            >
              <div className="h-full">
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold md:text-xl text-softBrown">
                    {plan.planName}
                  </h6>
                  <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl text-yellow">
                    {plan.monthlyPrice}
                  </h1>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  {plan.skills.map((skill, index) => (
                    <div key={index} className="flex flex-row">
                      <div className="mr-4 flex-none self-start">
                        <BiCheck className="size-6 text-softerBrown" />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-xl text-softerBrown mb-2">
                          {skill.website.title}
                        </p>
                        {skill.website.features.map((feature) => (
                          <li>{feature}</li>
                        ))}
                      </div>
                    </div>
                  ))}
                  {plan.skills.map((skill, index) => (
                    <div key={index} className="flex flex-row">
                      <div className="mr-4 flex-none self-start">
                        <BiCheck className="size-6 text-softerBrown" />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-xl mb-2 text-softerBrown">
                          {skill.marketing.title}
                        </p>
                        {skill.marketing.features.map((feature) => (
                          <li>{feature}</li>
                        ))}
                      </div>
                    </div>
                  ))}
                  {plan.skills.map((skill, index) => (
                    <div key={index} className="flex flex-row">
                      <div className="mr-4 flex-none self-start">
                        {skill.ai && (
                          <BiCheck className="size-6 text-softerBrown" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-xl mb-2 text-softerBrown">
                          {skill.ai?.title}
                        </p>
                        {skill.ai?.features.map((feature) => (
                          <li>{feature}</li>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center flex-col items-center gap-4 mb-8 text-softerBrown">
                  <h1 className="text-xl font-bold">{plan.bonus.title}</h1>
                  <h1 className="text-xl font-bold text-center">
                    {plan.bonus.features}
                  </h1>
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
                {custom.title}
              </h6>
              <h1 className="my-2 text-4xl font-bold md:text-7xl lg:text-8xl text-yellow">
                {custom.subtitle}
              </h1>
            </div>
            <div className="mb-8 flex flex-col md:flex-row md:justify-evenly font-bold text-xl gap-4 py-2">
              <div className="flex-row flex gap-2">
                <BiCheck className="size-6 text-softerBrown" />
                {custom.feature1}
              </div>
              <div className="flex-row flex gap-2">
                <BiCheck className="size-6 text-softerBrown" />
                {custom.feature2}
              </div>
              <div className="flex-row flex gap-2">
                <BiCheck className="size-6 text-softerBrown" />
                {custom.feature3}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex h-full flex-col justify-between border border-softerBrown px-6 py-8 md:p-8 gap-4">
          <div className="h-full">
            <div className="rb-6 mb-6 text-center md:mb-8">
              <h6 className="text-md font-bold md:text-xl text-softBrown">
                {addOn.title}
              </h6>
              <h1 className="my-2 text-4xl italic text-yellow">
                {addOn.price}
              </h1>
            </div>
            <div className="mb-8 md:grid md:grid-cols-3 text-center gap-4 py-2">
              {addOn.options.map((option, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 mb-4 justify-between"
                >
                  <div>
                    <div className="font-bold text-2xl mb-4 text-softerBrown">
                      {option.title}
                    </div>
                    <div className="italic">{option.subtitle}</div>
                  </div>
                  <div className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl text-yellow">
                    {option.price}
                  </div>
                </div>
              ))}
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
      skills: [
        {
          website: {
            title: (
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package1.features.website.title")}
                  </h1>
                )}
              </Translation>
            ),
            features: [
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package1.features.website.feature1")}
                  </h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package1.features.website.feature2")}
                  </h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package1.features.website.feature3")}
                  </h1>
                )}
              </Translation>,
            ],
          },
          marketing: {
            title: (
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package1.features.marketing.title")}
                  </h1>
                )}
              </Translation>
            ),
            features: [
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package1.features.marketing.feature1")}
                  </h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package1.features.marketing.feature2")}
                  </h1>
                )}
              </Translation>,
            ],
          },
        },
      ],
      bonus: {
        title: (
          <Translation>
            {(t) => <h1>{t("pricing.packages.package1.bonus.title")}</h1>}
          </Translation>
        ),
        features: [
          <Translation>
            {(t) => <h1>{t("pricing.packages.package1.bonus.feature")}</h1>}
          </Translation>,
        ],
      },
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
      skills: [
        {
          website: {
            title: (
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package2.features.website.title")}
                  </h1>
                )}
              </Translation>
            ),
            features: [
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package2.features.website.feature1")}
                  </h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package2.features.website.feature2")}
                  </h1>
                )}
              </Translation>,
            ],
          },
          marketing: {
            title: (
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package2.features.marketing.title")}
                  </h1>
                )}
              </Translation>
            ),
            features: [
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package2.features.marketing.feature1")}
                  </h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package2.features.marketing.feature2")}
                  </h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package2.features.marketing.feature3")}
                  </h1>
                )}
              </Translation>,
            ],
          },
          ai: {
            title: (
              <Translation>
                {(t) => (
                  <h1>{t("pricing.packages.package2.features.ai.title")}</h1>
                )}
              </Translation>
            ),
            features: [
              <Translation>
                {(t) => (
                  <h1>{t("pricing.packages.package2.features.ai.feature1")}</h1>
                )}
              </Translation>,
            ],
          },
        },
      ],
      bonus: {
        title: (
          <Translation>
            {(t) => <h1>{t("pricing.packages.package2.bonus.title")}</h1>}
          </Translation>
        ),
        features: [
          <Translation>
            {(t) => <h1>{t("pricing.packages.package2.bonus.feature")}</h1>}
          </Translation>,
        ],
      },
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
    {
      planName: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package3.title")}</h1>}
        </Translation>
      ),
      monthlyPrice: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package3.price")}</h1>}
        </Translation>
      ),
      skills: [
        {
          website: {
            title: (
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package3.features.website.title")}
                  </h1>
                )}
              </Translation>
            ),
            features: [
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package3.features.website.feature1")}
                  </h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package3.features.website.feature2")}
                  </h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package3.features.website.feature3")}
                  </h1>
                )}
              </Translation>,
            ],
          },
          marketing: {
            title: (
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package3.features.marketing.title")}
                  </h1>
                )}
              </Translation>
            ),
            features: [
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package3.features.marketing.feature1")}
                  </h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>
                    {t("pricing.packages.package3.features.marketing.feature2")}
                  </h1>
                )}
              </Translation>,
            ],
          },
          ai: {
            title: (
              <Translation>
                {(t) => (
                  <h1>{t("pricing.packages.package3.features.ai.title")}</h1>
                )}
              </Translation>
            ),
            features: [
              <Translation>
                {(t) => (
                  <h1>{t("pricing.packages.package3.features.ai.feature1")}</h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>{t("pricing.packages.package3.features.ai.feature2")}</h1>
                )}
              </Translation>,
              <Translation>
                {(t) => (
                  <h1>{t("pricing.packages.package3.features.ai.feature3")}</h1>
                )}
              </Translation>,
            ],
          },
        },
      ],
      bonus: {
        title: (
          <Translation>
            {(t) => <h1>{t("pricing.packages.package3.bonus.title")}</h1>}
          </Translation>
        ),
        features: [
          <Translation>
            {(t) => <h1>{t("pricing.packages.package3.bonus.feature")}</h1>}
          </Translation>,
        ],
      },
      forWho: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package3.forWho")}</h1>}
        </Translation>
      ),
      cta: (
        <Translation>
          {(t) => <h1>{t("pricing.packages.package3.cta")}</h1>}
        </Translation>
      ),
    },
  ],
  custom: {
    title: (
      <Translation>{(t) => <h1>{t("pricing.custom.title")}</h1>}</Translation>
    ),
    subtitle: (
      <Translation>
        {(t) => <h1>{t("pricing.custom.subtitle")}</h1>}
      </Translation>
    ),
    feature1: (
      <Translation>
        {(t) => <h1>{t("pricing.custom.feature1")}</h1>}
      </Translation>
    ),
    feature2: (
      <Translation>
        {(t) => <h1>{t("pricing.custom.feature2")}</h1>}
      </Translation>
    ),
    feature3: (
      <Translation>
        {(t) => <h1>{t("pricing.custom.feature3")}</h1>}
      </Translation>
    ),
  },
  addOn: {
    title: (
      <Translation>{(t) => <h1>{t("pricing.addOn.title")}</h1>}</Translation>
    ),
    price: (
      <Translation>{(t) => <h1>{t("pricing.addOn.price")}</h1>}</Translation>
    ),
    options: [
      {
        title: (
          <Translation>
            {(t) => <h1>{t("pricing.addOn.options.option1.title")}</h1>}
          </Translation>
        ),
        subtitle: (
          <Translation>
            {(t) => <h1>{t("pricing.addOn.options.option1.subtitle")}</h1>}
          </Translation>
        ),
        price: (
          <Translation>
            {(t) => <h1>{t("pricing.addOn.options.option1.price")}</h1>}
          </Translation>
        ),
      },
      {
        title: (
          <Translation>
            {(t) => <h1>{t("pricing.addOn.options.option2.title")}</h1>}
          </Translation>
        ),
        subtitle: (
          <Translation>
            {(t) => <h1>{t("pricing.addOn.options.option2.subtitle")}</h1>}
          </Translation>
        ),
        price: (
          <Translation>
            {(t) => <h1>{t("pricing.addOn.options.option2.price")}</h1>}
          </Translation>
        ),
      },
      {
        title: (
          <Translation>
            {(t) => <h1>{t("pricing.addOn.options.option3.title")}</h1>}
          </Translation>
        ),
        subtitle: (
          <Translation>
            {(t) => <h1>{t("pricing.addOn.options.option3.subtitle")}</h1>}
          </Translation>
        ),
        price: (
          <Translation>
            {(t) => <h1>{t("pricing.addOn.options.option3.price")}</h1>}
          </Translation>
        ),
      },
    ],
    cta: <Translation>{(t) => <h1>{t("pricing.addOn.cta")}</h1>}</Translation>,
  },
};
