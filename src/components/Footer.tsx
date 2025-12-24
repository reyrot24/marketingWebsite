import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import { images } from "@/constants/images";

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
        </div>
      </div>
    </footer>
  );
};

export const Footer4Defaults: Footer4Props = {
  logo: {
    url: "#",
    src: images.logo.src,
    alt: images.logo.alt,
  },
  columnLinks: [
    {
      links: [
        { title: "Home", url: "#home" },
        {
          title: "Chi sono",
          url: "#aboutme",
        },
        {
          title: "Servizi",
          url: "#services",
        },
        {
          title: "Progetti",
          url: "#projects",
        },
        {
          title: "Prezzi",
          url: "#pricing",
        },
        {
          title: "FAQs",
          url: "#faqs",
        },
        {
          title: "Overview",
          url: "#overview",
        },
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
  footerText: "© 2025 Vasile Andrei Rotaru. Tutti i diritti sono riservati.",
};
