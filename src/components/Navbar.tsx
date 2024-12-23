"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import LanguageSelector from "./LanguageSelector";
import { Translation, useTranslation } from "react-i18next";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: any;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
};

export type Navbar14Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Navbar = (props: Navbar14Props) => {
  const { logo, navLinks } = {
    ...Navbar14Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="backdrop-filter backdrop-blur-3xl opacity-95 bg-black fixed inset-0 bottom-auto z-[1000] mx-auto mt-5 flex w-full text-white px-[5%] md:mt-6 lg:mx-[5%] lg:w-auto lg:px-0">
      <div className="mx-auto flex min-h-16 w-full max-w-xxl items-center justify-between gap-x-4 gap-y-4 gold-line px-5 md:min-h-18 md:px-8">
        <a href={logo.url}>
          <img src={logo.src} alt={logo.alt} className="w-14 my-2" />
        </a>
        <button
          ref={buttonRef}
          className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-softBrown"
            animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
            variants={topLineVariants}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-softBrown"
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={middleLineVariants}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-softBrown"
            animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
            variants={bottomLineVariants}
          />
        </button>
        <motion.div
          variants={{
            open: { height: "var(--height, 100vh)" },
            close: { height: "auto" },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:static lg:left-auto lg:right-auto lg:top-auto lg:w-auto lg:overflow-visible lg:[--height:auto]"
        >
          <motion.div
            variants={{
              open: { y: 0 },
              close: { y: "var(--translate-y, -100%)" },
            }}
            animate={isMobileMenuOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: 0.3 }}
            className="absolute bg-black left-0 right-0 top-0 mx-auto min-w-[200px] justify-self-center px-[5%] text-center lg:static lg:inset-auto lg:mx-0 lg:px-0 lg:text-left lg:[--translate-y:0%]"
          >
            <div
              ref={menuRef}
              className="flex w-full flex-col border border-t-0 border-black  p-5 md:p-8 lg:w-auto lg:flex-row lg:border-none lg:bg-none lg:p-0"
            >
              {navLinks.map((navLink, index) => (
                <div key={index}>
                  <a
                    href={navLink.url}
                    className="hover:text-softBrown relative block py-3 text-center text-md lg:px-4 lg:py-2 lg:text-left lg:text-base"
                  >
                    {navLink.title}
                  </a>
                </div>
              ))}
              <div className="rt-4 mt-4 flex flex-col items-center gap-4 lg:ml-8 lg:mt-0 lg:flex-row">
                <a
                  href="https://calendly.com/reyrotaru1/webbyreybook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>{t("navbar.button")}</Button>
                </a>
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export const Navbar14Defaults: Navbar14Props = {
  logo: {
    url: "#",
    src: "Logo.png",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Home", url: "#home" },
    {
      title: <Translation>{(t) => <h1>{t("navbar.aboutme")}</h1>}</Translation>,
      url: "#aboutme",
    },
    {
      title: (
        <Translation>{(t) => <h1>{t("navbar.services")}</h1>}</Translation>
      ),
      url: "#services",
    },
    {
      title: (
        <Translation>{(t) => <h1>{t("navbar.projects")}</h1>}</Translation>
      ),
      url: "#projects",
    },
    {
      title: "FAQs",
      url: "#faqs",
    },
    /* {
      title: (
        <Translation>{(t) => <h1>{t("navbar.testimonials")}</h1>}</Translation>
      ),
      url: "#testimonials",
    }, */
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
