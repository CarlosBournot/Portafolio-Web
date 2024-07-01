import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function TechnologyItem({ imageSrc, altText, text }) {
  return (
    <div className="flex items-center py-4 pl-2 rounded-md shadow-sm bg-primaryGrey/10 backdrop:blur-sm">
      <img className="w-6 mr-2" src={imageSrc} alt={altText} />
      <p className="font-SourceSansPro dark:text-portfolio-background-color">
        {text}
      </p>
    </div>
  );
}

TechnologyItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Technologies() {
  const { t } = useTranslation();

  const frontEndTechnologies = [
    { imageSrc: "./image/html_logo.png", altText: "HTML", text: "HTML" },
    { imageSrc: "./image/css_logo.png", altText: "CSS", text: "CSS" },
    {
      imageSrc: "./image/javascript_logo.png",
      altText: "JavaScript",
      text: "JavaScript",
    },
    { imageSrc: "./image/Flutter.png", altText: "Flutter", text: "Flutter" },
    { imageSrc: "./image/react_logo.png", altText: "React", text: "React JS" },
    { imageSrc: "./image/vite__logo.png", altText: "Vite", text: "Vite" },
    {
      imageSrc: "./image/tailwind_logo.png",
      altText: "Tailwind CSS",
      text: "Tailwind CSS",
    },
    {
      imageSrc: "./image/typescript.png",
      altText: "TypeScript",
      text: "TypeScript",
    },
    {
      imageSrc: "./image/Angular.png",
      altText: "Angular",
      text: "Angular",
    },
  ];

  const tools = [
    { imageSrc: "./image/vs_logo.png", altText: "VS Code", text: "VS Code" },
    { imageSrc: "./image/github_logo.png", altText: "GitHub", text: "GitHub" },
    { imageSrc: "./image/git_logo.png", altText: "Git", text: "Git" },
  ];
  const BackEnd = [
    { imageSrc: "./image/nodejs.png", altText: "NodeJs", text: "NodeJs" },
    { imageSrc: "./image/nestjs.png", altText: "NestJs", text: "NestJs" },
    { imageSrc: "./image/express.png", altText: "ExpressJs", text: "ExpressJs" },
  ]

  const renderTechnologyList = (technologies) => (
    <div className="relative w-full mt-3">
      <div className="grid w-full grid-cols-2 gap-6 dark:text-white md:grid-cols-3 lg:grid-cols-4">
        {technologies.map((tech, index) => (
          <TechnologyItem key={index} {...tech} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="mt-20">
      <h2>{t("technologiesTitle")}</h2>
      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <p className="text-lg font-semibold text-left mt-14 font-SourceSansPro dark:text-white">
        Front-End
      </p>
      {renderTechnologyList(frontEndTechnologies)}


      <p className="text-lg font-semibold text-left mt-14 font-SourceSansPro dark:text-white">
        {t("Back-End")}
      </p>
      {renderTechnologyList(BackEnd)}

      <p className="text-lg font-semibold text-left mt-14 font-SourceSansPro dark:text-white">
        {t("technologiesTools")}
      </p>
      {renderTechnologyList(tools)}

      

      <div id="education"></div>
    </section>
  );
}
