import { useState, useEffect, useMemo } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const PDF_URLS = {
  en: {
    resume: "./PDF/en/Carlos-Bournot-ENG.pdf",
  },
  es: {
    resume: "./PDF/es/Carlos-Bournot.pdf",
  },
};

const AVATAR_SRC = {
  default: "/image/avatar.png",
};

const SOCIAL_LINKS = [
  {
    href: "https://github.com/CarlosBournot",
    icon: "fa-github",
    label: "GitHub Profile",
  },
  {
    href: "https://www.linkedin.com/in/carlos-bournot",
    icon: "fa-linkedin-in",
    label: "LinkedIn Profile",
  },
  {
    href: "https://www.instagram.com/charlybournot/",
    icon: "fa-instagram",
    label: "Instagram Profile",
  },
];

export default function Header() {
  const [isHovered] = useState(false);
  const { t } = useTranslation();

  const [pdfUrls, setPdfUrls] = useState(PDF_URLS[i18n.language]);

  useEffect(() => {
    const handleLanguageChange = () => {
      setPdfUrls(PDF_URLS[i18n.language]);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const avatarSrc = isHovered ? AVATAR_SRC.hover : AVATAR_SRC.default;
  const avatarClass = classNames("avatar-1-img w-full", { hovered: isHovered });

  const handleDownload = (url) => () => window.open(url, "_blank");

  return (
    <header
      className="relative mt-[150px] lg:mt-[220px] text-center transition duration-100 ease-in-out lg:flex lg:flex-row-reverse lg:justify-between"
      id="home"
    >
      <div className="max-w-[150px] mx-auto xl:max-w-[200px]">
        <img
          src={avatarSrc}
          alt="avatar-1"
          className={avatarClass}
        />
      </div>

      <div className="mt-10 lg:text-left lg:w-full lg:mt-0 lg:pr-24">
        <h1 className="">
          Carlos
          <span className=" text-primaryRed dark:text-[#3B82F6]">
            {" "}
            Bournot,
            <br />
          </span>
          {t("headerTitle")}
        </h1>
        <p className="mt-6 font-SourceSansPro md:mx-28 lg:mx-0 dark:text-white">
          {t("headerDescription")}
        </p>

        <div className="flex justify-center gap-4 mt-5 lg:justify-start">
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <i className={`fa-brands ${icon} headerIcon`}></i>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row xl:justify-normal">
          <button
            className="py-2 mt-6 w-full font-SourceSansPro font-semibold text-lg text-background-color rounded-md md:self-start md:w-[250px] lg:mt-24 xl:w-[300px] hover:scale-105 transition duration-300 ease-in-out bg-primaryRed dark:bg-[#3B82F6]"
            onClick={handleDownload(pdfUrls.resume)}
          >
            {t("resumeButton")}
          </button>
        </div>
      </div>
      <div id="projects"></div>
    </header>
  );
}
