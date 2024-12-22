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
            button: "Book now",
          },
          header: {
            title:
              "Building Websites and Social Campaigns That Make a Difference.",
            subtitle:
              "I specialize in crafting websites and social media strategies that not only look good but drive results. Let's take your brand to the next level.",
            button1: "Book now",
            button2: "Contact",
          },
          aboutme: {
            title: "Meet",
            goldText: "Rey",
            description: {
              first:
                "Hi! I'm Andrew, aka Rey — a 23 years old web and social media manager with a passion for technology 💻, science 🔬, music 🎸, martial arts 🥋 and sports 🏋🏻‍♂️. From all this passions, I learned to master the fundamentals and to push boundaries.",
              second:
                "I bring the same energy and dedication to my digital work, helping brands and professionals craft an impactful online presence.",
              third:
                "I specialize in building engaging websites, managing effective social media strategies, and creating compelling content. Whether you're looking to revamp your online identity, increase engagement, or grow your brand, I’m here to turn your ideas into reality with a clear focus on results.",
            },
            button: "Book now",
          },
          services: {
            title: "Tailored Services for Your Digital",
            goldText: "Growth",
            subtitle:
              "Every project is unique. Here’s how I can help you grow online:",
            sections: {
              section1: {
                title: "Web Design & Development",
                description:
                  "I create clean, visually appealing, and responsive websites that not only look good but are optimized for seamless user experience. Every website is custom-built to reflect your brand's identity and crafted with a focus on functionality and engagement.",
              },
              section2: {
                title: "Social Media Content Creation & Management",
                description:
                  " I specialize in creating engaging and visually captivating social media content tailored to your audience and goals. From strategic planning to daily management, I ensure your platforms are consistent, impactful, and aligned with your brand identity. Let me help you build authentic connections with your audience and grow your online presence.",
              },
              section3: {
                title: "Digital Marketing & Advertising",
                description:
                  "Drive measurable results with strategic digital marketing and advertising campaigns. I craft targeted strategies designed to increase visibility, drive traffic, and convert leads into loyal customers. Using data-driven insights and creative approaches, I help businesses achieve their marketing objectives through platforms like Google Ads, Facebook, Instagram, and more. Elevate your brand with campaigns that deliver ROI.",
              },
              section4: {
                title: "AI Integration & Automation",
                description:
                  "I offer AI integration services to help automate repetitive tasks and improve efficiency across your digital channels. From chatbots for customer support to content generation tools, I integrate AI-powered solutions that streamline workflows and enhance user experience.",
              },
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
                title: "How does social media management work?",
                description:
                  "Social media management involves planning, creating, scheduling, and analyzing content to build an engaging online presence. After an initial strategy session, I craft a content calendar tailored to your audience, keeping a consistent posting schedule. I also monitor engagement and analytics to refine the strategy as needed, ensuring your social media channels connect meaningfully with your target audience.",
              },
              faq4: {
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
            subtitle:
              "Do you have an idea or a project to develop? I’m here to help you turn it into reality. Compile the form to contact me, compile one of the google forms or click on the Book Now button.",
            form: {
              name: "Name",
              email: "Email",
              message: "Message",
              messagePlaceholder: "Type your message...",
              privacy: "I accept the",
              button: "Send message",
            },
            googleforms: {
              description: "Compile the Google Form to talk about the project:",
            },
          },
          footer: {
            aboutme: "About me",
            services: "Services",
            projects: "Projects",
            testimonials: "Testimonials",
            copyright: "© 2024 Vasile Andrei Rotaru. All rights reserved.",
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
            button: "Prenota",
          },
          header: {
            title:
              "Costruire siti web e campagne social che fanno la differenza.",
            subtitle:
              "Sono specializzato nella creazione di siti web e strategie per i social media che non solo hanno un bell'aspetto, ma generano anche risultati. Portiamo il tuo marchio al livello successivo.",
            button1: "Prenota",
            button2: "Contattami",
          },
          aboutme: {
            title: "Incontra",
            goldText: "Rey",
            description: {
              first:
                "Ciao! Sono Andrew, aka Rey, un web e social media manager di 23 anni con una passione per la tecnologia 💻, la scienza 🔬, la musica 🎸, le arti marziali 🥋 e lo sport 🏋🏻‍♂️. Da tutte queste passioni, ho imparato a padroneggiare le cose fondamentali e a superare i miei limiti.",
              second:
                "Metto la stessa energia e dedizione al servizio del mio lavoro digitale, aiutando marchi e professionisti a creare una presenza online di impatto.",
              third:
                "Sono specializzato nella creazione di siti web accattivanti, nella gestione di strategie efficaci sui social media e nella creazione di contenuti avvincenti. Che tu stia cercando di rinnovare la tua identità online, aumentare l'engagement o far crescere il tuo marchio, sono qui per trasformare le tue idee in realtà con un chiaro focus sui risultati.",
            },
            button: "Prenota",
          },
          services: {
            title: "Servizi su Misura per la Tua Crescita",
            goldText: "Digitale",
            subtitle:
              "Ogni progetto è unico. Ecco come posso aiutarti a crescere online:",
            sections: {
              section1: {
                title: "Web Design & Sviluppo",
                description:
                  "Sono specializzato nella creazione di siti web puliti, visivamente accattivanti e reattivi che non solo hanno un bell'aspetto, ma sono anche ottimizzati per un'esperienza utente fluida. Ogni sito web è personalizzato per riflettere l'identità del tuo marchio e realizzato con un'attenzione alla funzionalità e al coinvolgimento.",
              },
              section2: {
                title: "Creazione & Gestione di Contenuti per i Social Media",
                description:
                  "Creo contenuti per i social media coinvolgenti e visivamente accattivanti, su misura per il tuo pubblico e i tuoi obiettivi. Dalla pianificazione strategica alla gestione quotidiana, mi assicuro che le tue piattaforme siano coerenti, di impatto e allineate con l'identità del tuo marchio. Lascia che ti aiuti a creare connessioni autentiche con il tuo pubblico e ad aumentare la tua presenza online.",
              },
              section3: {
                title: "Digital Marketing & Advertising",
                description:
                  "Ottieni risultati misurabili con campagne strategiche di marketing digitale e pubblicità. elaboro strategie mirate progettate per aumentare la visibilità, generare traffico e convertire i lead in clienti fedeli. Utilizzando approfondimenti basati sui dati e approcci creativi, aiuto le azienda a raggiungere i loro obiettivi di marketing tramite piattaforme come Google Ads, Facebook, Instagram e altro ancora. Valorizza il tuo marchio con campagne che generano ROI.",
              },
              section4: {
                title: "Integrazione & Automazione con IA",
                description:
                  "Offro servizi di integrazione con IA per aiutare ad automatizzare le attività ripetitive e migliorare l'efficienza sui tuoi canali digitali. Dai chatbot per l'assistenza clienti agli strumenti di generazione di contenuti, integro soluzioni basate sull'IA che semplificano i flussi di lavoro e migliorano l'esperienza utente.",
              },
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
                title: "Come funziona la gestione dei social media?",
                description:
                  "La gestione dei social media implica la pianificazione, la creazione, la programmazione e l'analisi dei contenuti per creare una presenza online coinvolgente. Dopo una sessione di strategia iniziale, creo un calendario dei contenuti su misura per il tuo pubblico, mantenendo un programma di pubblicazione coerente. Monitoro anche il coinvolgimento e l'analisi per perfezionare la strategia secondo necessità, assicurandomi che i tuoi canali social media si colleghino in modo significativo con il tuo pubblico di destinazione.",
              },
              faq4: {
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
            subtitle:
              "hai un'idea o un progetto da sviluppare? Sono qui per aiutarti a trasformarlo in realtà. Compila il modulo per contattarmi, compila uno dei moduli di Google o clicca sul pulsante Prenota.",
            form: {
              name: "Nome",
              email: "Email",
              message: "Messaggio",
              messagePlaceholder: "Digita il tuo messaggio...",
              privacy: "Accetto la ",
              button: "Invia messaggio",
            },
            googleforms: {
              description: "Compila il Google Form per parlare del progetto:",
            },
          },
          footer: {
            aboutme: "Chi sono",
            services: "Servizi",
            projects: "Progetti",
            testimonials: "Testimonianze",
            copyright:
              "© 2024 Vasile Andrei Rotaru. Tutti i diritti sono riservati.",
          },
        },
      },
    },
    returnObjects: true,
    fallbackLng: "it",
    debug: true,
    lng: "it",
  });
