import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            aboutme: "About me",
            services: "Services",
            projects: "Projects",
            testimonials: "Testimonials",
            pricing: "Pricing",
            button: "Contact me",
          },
          header: {
            title: "Building Websites That Make a Difference.",
            subtitle:
              "I specialize in crafting websites and apps that not only look good but drive results. Let's take your brand to the next level.",
            button1: "Contact",
          },
          aboutme: {
            title: "Meet",
            goldText: "Rey",
            description: {
              first:
                "Hi! I'm Andrew, aka Rey — a 23 years old programmer and web developer with a passion for technology 💻, science 🔬, music 🎸, martial arts 🥋 and sports 🏋🏻‍♂️. From all this passions, I learned to master the fundamentals and to push boundaries.",
              second:
                "I bring the same energy and dedication to my digital work, helping brands and professionals craft an impactful online presence.",
              third:
                "I specialize in building engaging websites, full-stack web apps and mobile apps. Whether you're looking to revamp your online identity, increase engagement, or grow your brand, I’m here to turn your ideas into reality with a clear focus on results.",
            },
            button: "Contact me",
          },
          services: {
            title: "Tailored Services for Your Digital",
            goldText: "Growth",
            optional: "Optional",
            subtitle:
              "Every project is unique. Here’s how I can help you grow online:",
            sections: {
              section1: {
                title: "Web Design & Development",
                description:
                  "I create clean, visually appealing, and responsive websites that not only look good but are optimized for seamless user experience. Every website is custom-built to reflect your brand's identity and crafted with a focus on functionality and engagement.",
              },

              section2: {
                title: "AI Integration & Automation",
                description:
                  "I offer AI integration services to help automate repetitive tasks and improve efficiency across your digital channels. From chatbots for customer support to content generation tools, I integrate AI-powered solutions that streamline workflows and enhance user experience.",
              },
            },
          },
          pricing: {
            title: "Discover My",
            goldText: "Pricing",
            subtitle: "Choose the perfect plan for your business needs.",
            packages: {
              package1: {
                title: "Essential Package",
                price: "€149/mo or €599 one-time fee",
                features: {
                  feature1: "Landing Page",
                  feature2: "Mobile Responsive",
                },
                forWho:
                  "Great for freelancers, small businesses, and startups looking to establish their online presence!",
                cta: "Get Started",
              },
              package2: {
                title: "Standard Package",
                price: "€299/mo or €999 one-time fee",
                features: {
                  feature1: "Multi-Page Website (Up to 5 pages)",
                  feature2: "CRM Integration",
                },
                forWho:
                  "Great for small to medium-sized businesses looking to enhance their online presence and customer engagement.",
                cta: "Get Started",
              },
            },
            addon: {
              title: "Add Ons",
              subtitle: "You can also add to the package:",
              feature1: "+1 Page (€50)",
              feature2: "Admin Dashboard (starting at €299)",
              feature3: "Google My Business Setup & Ads (€99)",
              feature4: "Third Party Integrations (starting at €99)",
              feature5:
                "AI Learning & Integration with Chatbots, Calls, Emails, etc. (starting at €149)",
            },

            footer: {
              title: "Not sure what you need?",
              subtitle: "Schedule a Free Consultation!",
            },
          },
          projects: {
            title: "Showcasing My",
            goldText: "Work",
            subtitle:
              "Here’s a selection of projects I’ve had the privilege to bring to life:",
            projects: {
              project1: {
                title: "Empowering Fitness with a Dynamic Online Presence",
                description:
                  "I developed a high-energy website for a local gym, designed to motivate and engage both new and existing members. With streamlined navigation, class schedules, and booking features, this website offers a seamless user experience, showcasing the gym's brand and encouraging community connection.",
              },
              project2: {
                title: "Digital Hub for a Thriving Business",
                description:
                  "For this client, I created a polished, professional website that highlights their services and brand identity. Featuring an intuitive layout, clear service offerings, and interactive elements, this site is crafted to build trust, attract clients, and position the business as a leader in its industry.",
              },
            },
          },
          faqs: {
            title: "FAQs",
            subtitle:
              "These are frequently asked questions. If your question isn't answered, contact me.",
            button: "Contact me",
            faqs: {
              faq1: {
                title: "How long dows it take to create a website?",
                description:
                  "The timeline for creating a website depends on its complexity and specific requirements. On average, a standard website with essential features takes about 1 to 2 weeks from the planning stage to launch. For more complex projects, such as those requiring custom development or e-commerce features, the timeline may extend. Throughout the process, I ensure clear communication so that we stay on track and meet your goals.",
              },
              faq2: {
                title: "Can I update the website myself?",
                description:
                  "Absolutely! My goal is to create websites that are not only user-friendly for visitors but also manageable for you. I use Sanity as content managing platform, so that it's easy for you to update content, images, and basic settings on your own. At the end of the project, I provide training and resources to ensure you feel confident in making updates, while also offering ongoing support if needed.",
              },
              faq3: {
                title:
                  "What does AI integration mean, and how canit benefit my business?",
                description:
                  "AI integration involves incorporating intelligent tools, such as chatbots, content generators, or automation software, into your digital systems. These solutions can handle repetitive tasks, personalize customer experiences, and improve response times. For instance, a chatbot on your website can handle basic customer inquiries 24/7, improving service efficiency. To implement these, cost may vary or go up.",
              },
            },
          },
          contact: {
            title: "Let's Talk About",
            goldText: "Your Project",
            alert: "I'll contact you very soon!",
            subtitle:
              "Do you have an idea or a project to develop? I’m here to help you turn it into reality. Compile the form send me an email or click the button to talk on WhatsApp",
            form: {
              name: "Name",
              email: "Email",
              message: "Message",
              messagePlaceholder: "Type your message...",
              privacy: "I accept the",
              button: "Send message",
            },
          },
          footer: {
            aboutme: "About me",
            services: "Services",
            projects: "Projects",
            testimonials: "Testimonials",
            pricing: "Pricing",
            copyright: "© 2025 Vasile Andrei Rotaru. All rights reserved.",
          },
        },
      },
      it: {
        translation: {
          navbar: {
            aboutme: "Chi sono",
            services: "Servizi",
            projects: "Progetti",
            testimonials: "Testimonianze",
            pricing: "Prezzi",
            button: "Contattami",
          },
          header: {
            title: "Costruire siti web che fanno la differenza.",
            subtitle:
              "Sono specializzato nella creazione di siti web e app che non solo hanno un bell'aspetto, ma generano anche risultati. Portiamo il tuo marchio al livello successivo.",
            button1: "Contattami",
          },
          aboutme: {
            title: "Chi",
            goldText: "Sono",
            description: {
              first:
                "Ciao! Sono Andrea, aka Rey, un web programmatore e web developer di 23 anni con una passione per la tecnologia 💻, la scienza 🔬, la musica 🎸, le arti marziali 🥋 e lo sport 🏋🏻‍♂️. Da tutte queste passioni, ho imparato a padroneggiare le cose fondamentali e a superare i miei limiti.",
              second:
                "Metto la stessa energia e dedizione al servizio del mio lavoro digitale, aiutando marchi e professionisti a creare una presenza online di impatto.",
              third:
                "Sono specializzato nella creazione di siti web accattivanti, di web app full stack e applicazioni mobile. Che tu stia cercando di rinnovare la tua identità online, aumentare l'engagement o far crescere il tuo marchio, sono qui per trasformare le tue idee in realtà con un chiaro focus sui risultati.",
            },
            button: "Contattami",
          },
          services: {
            title: "Servizi su Misura per la Tua Crescita",
            goldText: "Digitale",
            optional: "Opzionale",
            subtitle:
              "Ogni progetto è unico. Ecco come posso aiutarti a crescere online:",
            sections: {
              section1: {
                title: "Web Design & Sviluppo",
                description:
                  "Sono specializzato nella creazione di siti web puliti, visivamente accattivanti e reattivi che non solo hanno un bell'aspetto, ma sono anche ottimizzati per un'esperienza utente fluida. Ogni sito web è personalizzato per riflettere l'identità del tuo marchio e realizzato con un'attenzione alla funzionalità e al coinvolgimento.",
              },

              section2: {
                title: "Integrazione & Automazione con IA",
                description:
                  "Offro servizi di integrazione con IA per aiutare ad automatizzare le attività ripetitive e migliorare l'efficienza sui tuoi canali digitali. Dai chatbot per l'assistenza clienti agli strumenti di generazione di contenuti, integro soluzioni basate sull'IA che semplificano i flussi di lavoro e migliorano l'esperienza utente.",
              },
            },
          },
          pricing: {
            title: "Scopri i miei",
            goldText: "Prezzi",
            subtitle:
              "Scegli il piano perfetto per le esigenze della tua azienda.",
            packages: {
              package1: {
                title: "Pacchetto Essenziale",
                price: "€149/mese o €599 una tantum",
                features: {
                  feature1: "Landing Page",
                  feature2: "Mobile Responsive",
                },
                forWho:
                  "Ideale per liberi professionisti, piccole imprese e startup che desiderano affermare la propria presenza online!",
                cta: "Inizia ora",
              },
              package2: {
                title: "Pacchetto Standard",
                price: "€299/mese o €999 una tantum",
                features: {
                  feature1: "Sito Web Multi-Pagina (Fino a 5 pagine)",
                  feature2: "Integrazione con CRM",
                },
                forWho:
                  "Ideale per le piccole e medie imprese che desiderano migliorare la propria presenza online e il coinvolgimento dei clienti.",
                cta: "Inizia ora",
              },
            },
            addon: {
              title: "Componenti aggiuntivi",
              subtitle: "Puoi anche aggiungere al pacchetto:",
              feature1: "+1 Pagina (€50)",
              feature2: "Dashboard di amministrazione (a partire da €299)",
              feature3: "Configurazione e annunci di Google My Business (€99)",
              feature4: "Integrazioni di terze parti (a partire da €99)",
              feature5:
                "Apprendimento e integrazione dell'IA con chatbot, chiamate, email, ecc. (a partire da €149)",
            },

            footer: {
              title: "Non sei sicuro di cosa hai bisogno?",
              subtitle: "Prenota una consulenza gratuita!",
            },
          },
          projects: {
            title: "Il Mio",
            goldText: "Lavoro",
            subtitle:
              "Ecco una selezione di progetti che ho avuto il privilegio di realizzare:",
            projects: {
              project1: {
                title: "Potenziare il Fitness con un Presenza Online Dinamica",
                description:
                  "Ho sviluppato un sito web ad alta energia per una palestra locale, progettato per motivare e coinvolgere sia i nuovi che gli attuali membri. Con una navigazione semplificata, orari dei corsi e funzionalità di prenotazione, questo sito web offre un'esperienza utente fluida, mettendo in mostra il marchio della palestra e incoraggiando la connessione con la comunità.",
              },
              project2: {
                title: "Hub Digitale per un'Attività Fiorente",
                description:
                  "Per questo cliente, ho creato un sito web raffinato e professionale che mette in risalto i suoi servizi e l'identità del marchio. Caratterizzato da un layout intuitivo, offerte di servizi chiare ed elementi interattivi, questo sito è stato creato per creare fiducia, attrarre clienti e posizionare l'azienda come leader nel suo settore.",
              },
            },
          },
          faqs: {
            title: "FAQs",
            subtitle:
              "Queste sono domande frequenti. Se non trovi risposta alla tua domanda, contattami.",
            button: "Contattami",
            faqs: {
              faq1: {
                title: "Quanto tempo ci vuole per creare un sito web?",
                description:
                  "La tempistica per la creazione di un sito web dipende dalla sua complessità e dai requisiti specifici. In media, un sito web standard con funzionalità essenzuali impiega circa 1 o 2 settimane dalla fase di pianificazione al lancio. Per progetti più complessi, come quelli che richiedono sviluppo personalizzato o funzionalità di e-commerce, la tempistica potrebbe estendersi. Durante tutto il processo, garantisco la comunicazione chiara in modo da rimanere sulla buona strada e raggiungere i tuoi obiettivi.",
              },
              faq2: {
                title: "Posso aggiornare il sito web da solo?",
                description:
                  "Assolutamente! Il mio obiettivo è creare siti web che non siano solo facili da usare per i visitatori, ma anche gestibili per te. Utilizzo Sanity come piattaforma di gestione dei contenuti, in modo che tu possa aggiornare facilmente contenuti, immagini e impostazioni di base da solo. Alla fine del progetto, fornisco formazione e risorse per assicurarti di sentirti sicuro nell'effettuare gli aggiornamenti, offrendo anche supporto continuo se necessario.",
              },
              faq3: {
                title:
                  "Cosa significa integrazione con AI e come può essere utile alla mia attività?",
                description:
                  "L'integrazione con AI implica l'incorporazione di strumenti intelligenti, come chatbot, generatori di contenuti o software di automazione, nei tuoi sistemi digitali. Queste soluzioni possono gestire attività ripetitive, personalizzare le esperienze dei clienti e migliorare i tempi di risposta. Ad esempio, un chatbot sul tuo sito Web può gestire le richieste di base dei clienti 24 ore su 24, 7 giorni su 7, migliorando l'efficienza del servizio. Per implementarli, i costi possono variare o aumentare.",
              },
            },
          },
          contact: {
            title: "Parliamo del",
            goldText: "Tuo Progetto",
            alert: "Ti contatterò presto.",
            subtitle:
              "Hai un'idea o un progetto da sviluppare? Sono qui per aiutarti a trasformarlo in realtà. Compila il modulo per inviarmi un'email o clicca il pulsante per parlare su WhatsApp",
            form: {
              name: "Nome",
              email: "Email",
              message: "Messaggio",
              messagePlaceholder: "Digita il tuo messaggio...",
              privacy: "Accetto la ",
              button: "Invia messaggio",
            },
          },
          footer: {
            aboutme: "Chi sono",
            services: "Servizi",
            projects: "Progetti",
            testimonials: "Testimonianze",
            pricing: "Prezzi",
            copyright:
              "© 2025 Vasile Andrei Rotaru. Tutti i diritti sono riservati.",
          },
        },
      },
    },
    returnObjects: true,
    fallbackLng: "it",
    debug: true,
    lng: "it",
  });
