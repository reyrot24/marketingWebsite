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
            title:
              "Building Websites and Social Campaigns That Make a Difference.",
            subtitle:
              "I specialize in crafting websites and social media strategies that not only look good but drive results. Let's take your brand to the next level.",
            button1: "Contact",
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
          pricing: {
            title: "Discover My",
            goldText: "Pricing",
            subtitle:
              "Choose the perfect plan for your business needs. Whether you need a stunning website, social media, or full-scale digital marketing, I've got you covered!",
            packages: {
              package1: {
                title: "Essential Package",
                price: "€149/mo",
                features: {
                  website: {
                    title: "Website Development",
                    feature1:
                      "1-Page Landing Website (Custom Design & Mobile-Optimized)",
                    feature2: "SEO Setup",
                    feature3: "Contact Form & Basic Analytics",
                  },
                  marketing: {
                    title: "Marketing",
                    feature1: "Basic Google My Business Setup",
                    feature2: "Basic Monthly Performance Report",
                  },
                },
                bonus: {
                  title: "Bonus:",
                  feature: "Newsletter Setup (Up to 500 subscribers)",
                },
                forWho:
                  "Great for freelancers, small businesses, and startups looking to establish their online presence!",
                cta: "Get Started",
              },
              package2: {
                title: "Growth Package",
                price: "€249/mo",
                features: {
                  website: {
                    title: "Website Development",
                    feature1: "5-Page Website (Custom Design & SEO-Optimized)",
                    feature2: "Blog & Content Management System",
                  },
                  marketing: {
                    title: "Marketing",
                    feature1: "Google My Business Optimization",
                    feature2: "Google & Facebook Ads Management",
                    feature3: "Monthly Performance Report",
                  },
                  ai: {
                    title: "AI Automations",
                    feature1: "Basic AI Automations for Social Media & Emails",
                  },
                },
                bonus: {
                  title: "Bonus:",
                  feature: "Newsletter Automation (Up to 1000 subscribers)",
                },
                forWho:
                  "Perfect for businesses ready to scale and increase their reach!",
                cta: "Upgrade Now",
              },
              package3: {
                title: "Ultimate Package",
                price: "€499/mo",
                features: {
                  website: {
                    title: "Website Development",
                    feature1: "Custom Full-Stack Solution",
                    feature2:
                      "Advanced Website with Backend (E-Commerce, Booking, or Membership)",
                    feature3: "CRM & Database Integration",
                  },
                  marketing: {
                    title: "Marketing",
                    feature1:
                      "Advanced Analytics & Monthly Strategy Consultation",
                    feature2: "Conversion Rate Optimization for Maximum Sales",
                  },
                  ai: {
                    title: "AI Automations",
                    feature1: "AI-Powered Marketing Automations",
                    feature2: "Data-Driven Performance Reports & Consultations",
                    feature3: "24/7 Website Monitoring & Support",
                  },
                },
                bonus: {
                  title: "Bonus:",
                  feature:
                    "VIP Priority Support + Unlimited Newsletter Automation",
                },
                forWho:
                  "The ultimate package for businesses looking to automate and dominate their industry!",
                cta: "Get the Ultimate Package",
              },
            },
            custom: {
              title: "Custom Services",
              subtitle: "Need something unique? I also offer:",
              feature1: "Email Marketing & Automation",
              feature2: "Branding & Graphic design",
              feature3: "CRM Setup & Workflow Automation",
            },
            addOn: {
              title: "Website Development (One-Time Fee)",
              price: "Starting at €99",
              options: {
                option1: {
                  title: "Landing Page Website (1 Page)",
                  subtitle: "Perfect for personal brands & small businesses",
                  price: "€99",
                },
                option2: {
                  title: "Multi-Page Website (Up to 5 Pages)*",
                  subtitle: "Ideal for businesses & service providers",
                  price: "€199",
                },
                option3: {
                  title:
                    "Full-Stack Website (E-Commerce, Booking, or Membership System)",
                  subtitle: "Advanced custom development",
                  price: "€499",
                },
              },
              cta: "Get Your Website",
              asteric: "+ €50 for any additional page",
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
            title:
              "Costruire siti web e campagne social che fanno la differenza.",
            subtitle:
              "Sono specializzato nella creazione di siti web e strategie per i social media che non solo hanno un bell'aspetto, ma generano anche risultati. Portiamo il tuo marchio al livello successivo.",
            button1: "Contattami",
          },
          aboutme: {
            title: "Chi",
            goldText: "Sono",
            description: {
              first:
                "Ciao! Sono Andrea, aka Rey, un web e social media manager di 23 anni con una passione per la tecnologia 💻, la scienza 🔬, la musica 🎸, le arti marziali 🥋 e lo sport 🏋🏻‍♂️. Da tutte queste passioni, ho imparato a padroneggiare le cose fondamentali e a superare i miei limiti.",
              second:
                "Metto la stessa energia e dedizione al servizio del mio lavoro digitale, aiutando marchi e professionisti a creare una presenza online di impatto.",
              third:
                "Sono specializzato nella creazione di siti web accattivanti, nella gestione di strategie efficaci sui social media e nella creazione di contenuti avvincenti. Che tu stia cercando di rinnovare la tua identità online, aumentare l'engagement o far crescere il tuo marchio, sono qui per trasformare le tue idee in realtà con un chiaro focus sui risultati.",
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
          pricing: {
            title: "Scopri i Miei",
            goldText: "Prezzi",
            subtitle:
              "Scegli il piano perfetto per le tue esigenze aziendali. Che tu abbia bisogno di un sito web straordinario, di social media o di marketing digitale, ci penso io! ",
            packages: {
              package1: {
                title: "Pacchetto Essenziale",
                price: "€149/mese",
                features: {
                  website: {
                    title: "Sviluppo del sito web",
                    feature1:
                      "1-Pagina Landing (Design Personalizzato & Ottimizzato per Mobile)",
                    feature2: "Configurazione SEO ",
                    feature3: "Modulo di Contatto & Analytics di Base",
                  },
                  marketing: {
                    title: "Marketing",
                    feature1: "Configurazione di base di Google My Business",
                    feature2: "Rapporto base sulle prestazioni mensili",
                  },
                },
                bonus: {
                  title: "Bonus:",
                  feature: "Configurazione Newsletter (Fino a 500 iscritti)",
                },
                forWho:
                  "Ideale per liberi professionisti, piccole imprese e startup che desiderano affermare la propria presenza online!",
                cta: "Inizia adesso",
              },
              package2: {
                title: "Pacchetto Crescita",
                price: "€249/mese",
                features: {
                  website: {
                    title: "Sviluppo del sito web",
                    feature1:
                      "Sito Web con 5 Pagine (Design Personalizzato & Ottimizzato per la SEO)",
                    feature2: "Blog e Sistema di Gestione dei Contenuti",
                  },
                  marketing: {
                    title: "Marketing",
                    feature1: "Ottimizzazione di Google My Business",
                    feature2: "Gestione di Google & Facebook Ads",
                    feature3: "Rapporto sulle prestazioni mensili",
                  },
                  ai: {
                    title: "Automazioni AI",
                    feature1: "Automazioni di Base per Social Media & Email",
                  },
                },
                bonus: {
                  title: "Bonus:",
                  feature: "Automazione Newsletter (Fino a 1000 iscritti)",
                },
                forWho:
                  "Perfetto per le aziende pronte a crescere e ad aumentare la propria portata!",
                cta: "Aggiorna ora",
              },
              package3: {
                title: "Pacchetto Ultimate",
                price: "€499/mese",
                features: {
                  website: {
                    title: "Sviluppo del sito web",
                    feature1: "Soluzione Full-Stack Personalizzata",
                    feature2:
                      "Sito Web Avanzato (E-Commerce, Prenotazione o Abbonamento)",
                    feature3: "Integrazione con CRM & Database",
                  },
                  marketing: {
                    title: "Marketing",
                    feature1:
                      "Analisi Avanzata e Consulenza Strategica Mensile",
                    feature2:
                      "Ottimizzazione del Tasso di Conversione per il Massimo delle Vendite",
                  },
                  ai: {
                    title: "Automazioni AI",
                    feature1:
                      "Automazioni di Marketing Basate sull'Intelligenza Artificiale",
                    feature2:
                      "Report e Consulenze sulle Prestazioni basate sui Dati",
                    feature3:
                      "Monitoraggio e Supporto del Sito Web 24 ore su 24, 7 giorni su 7",
                  },
                },
                bonus: {
                  title: "Bonus:",
                  feature:
                    "Supporto Prioritario VIP + Automazione Illimitata delle Newsletter",
                },
                forWho:
                  "Il pacchetto definitivo per le aziende che vogliono automatizzare e dominare il loro settore!",
                cta: "Ottieni il pacchetto definitivo",
              },
            },
            custom: {
              title: "Servizi personalizzati",
              subtitle: "Hai bisogno di qualcosa di unico? Offro anche:",
              feature1: "Email marketing e automazione",
              feature2: "Branding e grafica",
              feature3: "Configurazione CRM e automazione del flusso di lavoro",
            },
            addOn: {
              title: "Sviluppo Sito Web (Una tantum)",
              price: "A partire da €99",
              options: {
                option1: {
                  title: "Sito Web Landing (1 Pagina)",
                  subtitle: "Perfetto per marchi personali e piccole imprese",
                  price: "€99",
                },
                option2: {
                  title: "Sito Web Multi-Pagine (Fino a 5 pagine)*",
                  subtitle: "Ideale per aziende e fornitori di servizi",
                  price: "€199",
                },
                option3: {
                  title:
                    "Sito Web Full-Stack (E-Commerce, Prenotazioni, o Sistema di Abbonamento)",
                  subtitle: "Sviluppo personale avanzato",
                  price: "€399",
                },
              },
              cta: "Prendi il tuo Sito Web",
              asteric: "+ €50 per pagine aggiuntive",
            },
            footer: {
              title: "Non sei sicuro di quello che ti serve?",
              subtitle: "Prenota un Consulto Gratuito!",
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
