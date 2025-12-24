import { CheckIcon } from "@radix-ui/react-icons";

type Packages = {
  title: string;
  description: string;
  featureIncludes: string;
  features: string[];
  price: string;
};

type Props = {
  description: string;
  packages: Packages[];
};

type PricingProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const Pricing = (props: PricingProps) => {
  const { description, packages } = {
    ...PricingDefaults,
    ...props,
  } as Props;
  return (
    <section id="pricing" className="bg-black1 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-brown">
            I miei Prezzi
          </h1>
          {description}
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {packages.map((el, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col items-center text-center border border-softerBrown rounded-xl"
            >
              <div className="m-4">
                <h1 className="text-softerBrown italic mb-5 text-md font-bold md:mb-6 md:text-lg md:leading-[1.3] lg:text-2xl">
                  {el.title}
                </h1>
                <div>
                  <h1 className="mb-5 text-4xl font-extrabold md:mb-6 text-softerBrown">
                    {el.price}
                  </h1>
                </div>
                <p>{el.description}</p>
              </div>
              <div className="mb-8">
                <h1 className="text-softBrown mb-5 text-md font-bold md:mb-6 md:text-lg md:leading-[1.3] lg:text-xl">
                  {el.featureIncludes}
                </h1>
                <div className="flex flex-col gap-8 mx-2">
                  {el.features.map((feature) => (
                    <div className="flex justify-between gap-8 items-center">
                      <CheckIcon className="w-8 h-8 text-softerBrown" />
                      <div className="text-center w-full">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const PricingDefaults: Props = {
  description: "Scegli il pacchetto che si adatta meglio al tuo progetto:",
  packages: [
    {
      title: "Pacchetto Starter",
      description:
        "Perfetto per i freelancer, i personal brands o chiunque stia iniziando.",
      featureIncludes: "Include:",
      features: [
        "1-3 pagine (Home, Chi siamo, Contatti)",
        "Design responsive ottimizzato per dispositivi mobili",
        "Design personalizzato (Figma o Tailwind)",
        "Ottimizzazione SEO di base (meta tag, velocità di pagina)",
        "Modulo di contatto con notifiche email",
        "Link ai social media",
        "Hosting e distribuzione semplici (Vercel)",
        "Ottimizzazione delle prestazioni di base",
      ],
      price: "€250 - €350",
    },
    {
      title: "Pacchetto Business",
      description:
        "Per professionisti o aziende che necessitano di risultati concreti, automazione e strumenti.",
      featureIncludes: "Include tutto in Starter, più:",
      features: [
        "Fino a 7 pagine (Home, Servizi, Blog, Contatti, Portfolio...)",
        "CMS personalizzato (tramite Supabase, Sanity o Notion)",
        "Impostazione del blog con struttura SEO-friendly",
        "Integrazione con modulo di prenotazione o calendario (Calendly, TidyCal)",
        "Integrazione con i social media (incorporamento di post su Instagram, TikTok, ecc.)",
        "Integrazione con Google Analytics",
        "Sitemap + SEO + indicizzazione su Google",
        "Video di formazione tecnica / guida in PDF per l'utilizzo del CMS",
        "Automazioni con AI",
      ],
      price: "€500 - €1200",
    },
    {
      title: "Pacchetto Avanzato",
      description:
        "Progettato per le aziende che desiderano prestazioni, analisi e automazione.",
      featureIncludes: "Includes everything from Growth, plus:",
      features: [
        "Integrazione con chatbot AI (bot FAQ o bot di contatto tramite Bolt.ai, Voiceflow o il tuo backend)",
        "Database Supabase avanzato (per la gestione di servizi, prenotazioni, prodotti)",
        "Dashboard di amministrazione (interfaccia CRUD per la gestione dei dati)",
        "Automazione delle email (benvenuto, conferma della prenotazione, iscrizione alla newsletter)",
        "Configurazione API (ad esempio, per connettersi a strumenti esterni, moduli, Stripe, ecc.)",
        "Funzionalità backend personalizzate (ad esempio, dashboard di analisi, post di blog privati)",
        "Supporto multilingue",
        "Integrazione opzionale con Stripe o PayPal",
        "30 giorni di supporto tecnico (correzioni, domande, assistenza all'utilizzo)",
        "Automazioni più avanzate con AI",
      ],
      price: "€1500 - €2500",
    },
  ],
};
