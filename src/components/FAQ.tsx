import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  questions: QuestionsProps[];
};

export type Faq3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FAQ = (props: Faq3Props) => {
  const { heading, description, questions } = {
    ...Faq3Defaults,
    ...props,
  } as Props;
  return (
    <section id="faqs" className="bg-black1 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-brown">
            {heading}
          </h1>
          {description}
          <div className="mt-6 md:mt-8">
            <a href="#contact">
              <Button>Contattami</Button>
            </a>
          </div>
        </div>
        <Accordion type="single" collapsible>
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md text-left hover:text-softerBrown ">
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
  description:
    "Queste sono domande frequenti. Se non trovi risposta alla tua domanda, contattami.",
  questions: [
    {
      title: "Quanto tempo ci vuole per creare un sito web?",
      answer:
        "La tempistica per la creazione di un sito web dipende dalla sua complessità e dai requisiti specifici. In media, un sito web standard con funzionalità essenzuali impiega circa 1 o 2 settimane dalla fase di pianificazione al lancio. Per progetti più complessi, come quelli che richiedono sviluppo personalizzato o funzionalità di e-commerce, la tempistica potrebbe estendersi. Durante tutto il processo, garantisco la comunicazione chiara in modo da rimanere sulla buona strada e raggiungere i tuoi obiettivi.",
    },
    {
      title: "Posso aggiornare il sito web da solo?",
      answer:
        "Assolutamente! Il mio obiettivo è creare siti web che non siano solo facili da usare per i visitatori, ma anche gestibili per te. Utilizzo Sanity come piattaforma di gestione dei contenuti, in modo che tu possa aggiornare facilmente contenuti, immagini e impostazioni di base da solo. Alla fine del progetto, fornisco formazione e risorse per assicurarti di sentirti sicuro nell'effettuare gli aggiornamenti, offrendo anche supporto continuo se necessario.",
    },
    {
      title:
        "Cosa significa integrazione con AI e come può essere utile alla mia attività?",
      answer:
        "L'integrazione con AI implica l'incorporazione di strumenti intelligenti, come chatbot, generatori di contenuti o software di automazione, nei tuoi sistemi digitali. Queste soluzioni possono gestire attività ripetitive, personalizzare le esperienze dei clienti e migliorare i tempi di risposta. Ad esempio, un chatbot sul tuo sito Web può gestire le richieste di base dei clienti 24 ore su 24, 7 giorni su 7, migliorando l'efficienza del servizio. Per implementarli, i costi possono variare o aumentare.",
    },
  ],
};
