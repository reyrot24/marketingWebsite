import { Translation, useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

type QuestionsProps = {
  title: any;
  answer: any;
};

type Props = {
  heading: string;
  description: any;
  questions: QuestionsProps[];
};

export type Faq3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FAQ = (props: Faq3Props) => {
  const { heading, description, questions } = {
    ...Faq3Defaults,
    ...props,
  } as Props;
  const { t } = useTranslation();
  return (
    <section id="faqs" className="bg-black1 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="text-softerBrown rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
          <div className="mt-6 md:mt-8">
            <a href="#contact">
              <Button>{t("faqs.button")}</Button>
            </a>
          </div>
        </div>
        <Accordion type="single" collapsible>
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md hover:text-softerBrown ">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const Faq3Defaults: Faq3Props = {
  heading: "FAQs",
  description: (
    <Translation>{(t) => <h1>{t("faqs.subtitle")}</h1>}</Translation>
  ),
  questions: [
    {
      title: (
        <Translation>{(t) => <h1>{t("faqs.faqs.faq1.title")}</h1>}</Translation>
      ),
      answer: (
        <Translation>
          {(t) => <h1>{t("faqs.faqs.faq1.description")}</h1>}
        </Translation>
      ),
    },
    {
      title: (
        <Translation>{(t) => <h1>{t("faqs.faqs.faq2.title")}</h1>}</Translation>
      ),
      answer: (
        <Translation>
          {(t) => <h1>{t("faqs.faqs.faq2.description")}</h1>}
        </Translation>
      ),
    },
    {
      title: (
        <Translation>{(t) => <h1>{t("faqs.faqs.faq3.title")}</h1>}</Translation>
      ),
      answer: (
        <Translation>
          {(t) => <h1>{t("faqs.faqs.faq3.description")}</h1>}
        </Translation>
      ),
    },
    {
      title: (
        <Translation>{(t) => <h1>{t("faqs.faqs.faq4.title")}</h1>}</Translation>
      ),
      answer: (
        <Translation>
          {(t) => <h1>{t("faqs.faqs.faq4.description")}</h1>}
        </Translation>
      ),
    },
  ],
};
