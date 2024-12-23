import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import { useEffect } from "react";
import { Translation } from "react-i18next";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: any;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText: any;
  footerLinks: FooterLink[];
};

export type Footer4Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer = (props: Footer4Props) => {
  const { logo, footerText, columnLinks, socialMediaLinks } = {
    ...Footer4Defaults,
    ...props,
  } as Props;

  const PrivacyPolicy = () => {
    useEffect(() => {
      // Load the Iubenda script when the component mounts
      const script = document.createElement("script");
      script.src = "https://cdn.iubenda.com/iubenda.js";
      script.async = true;
      document.body.appendChild(script);

      // Cleanup the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return (
      <a
        href="https://www.iubenda.com/privacy-policy/56148233"
        className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Privacy Policy"
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice
      >
        Privacy Policy
      </a>
    );
  };

  const CookiePolicy = () => {
    useEffect(() => {
      // Load the Iubenda script when the component mounts
      const script = document.createElement("script");
      script.src = "https://cdn.iubenda.com/iubenda.js";
      script.async = true;
      document.body.appendChild(script);

      // Cleanup the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return (
      <a
        href="https://www.iubenda.com/privacy-policy/56148233/cookie-policy"
        className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Cookie Policy"
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice
      >
        Cookie Policy
      </a>
    );
  };

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 from-black to to-darkerBrown bg-gradient-to-r border-t-[1px] border-softerBrown">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <a href={logo.url} className="lg:justify-self-start">
            <img src={logo.src} alt={logo.alt} className="w-14 my-2" />
          </a>
          {columnLinks.map((column, index) => (
            <ul
              key={index}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="font-semibold animation-link">
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="hover:text-softerBrown"
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <PrivacyPolicy />
            <CookiePolicy />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const Footer4Defaults: Footer4Props = {
  logo: {
    url: "#",
    src: "Logo.png",
    alt: "Logo image",
  },
  columnLinks: [
    {
      links: [
        { title: "Home", url: "#home" },
        {
          title: (
            <Translation>{(t) => <p>{t("footer.aboutme")}</p>}</Translation>
          ),
          url: "#aboutme",
        },
        {
          title: (
            <Translation>{(t) => <p>{t("footer.services")}</p>}</Translation>
          ),
          url: "#services",
        },
        {
          title: (
            <Translation>{(t) => <p>{t("footer.projects")}</p>}</Translation>
          ),
          url: "#projects",
        },
        { title: "FAQs", url: "#faqs" },
        /* {
          title: (
            <Translation>
              {(t) => <h1>{t("footer.testimonials")}</h1>}
            </Translation>
          ),
          url: "#testimonials",
        }, */
      ],
    },
  ],
  socialMediaLinks: [
    {
      url: "https://www.instagram.com/__rey_rotaru__/",
      icon: <BiLogoInstagram className="size-6  hover:text-amber-600" />,
    },
    {
      url: "https://x.com/ReyRotaru",
      icon: <FaXTwitter className="size-6 p-0.5" />,
    },
    {
      url: "https://www.linkedin.com/in/vasile-andrei-rotaru/",
      icon: <BiLogoLinkedinSquare className="size-6 hover:text-blue-300" />,
    },
  ],
  footerText: (
    <Translation>{(t) => <h1>{t("footer.copyright")}</h1>}</Translation>
  ),
};
