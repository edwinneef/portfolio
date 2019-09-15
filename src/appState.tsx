import { appStateType } from "./types";

import buro_desktop from "./assets/images/buro_desktop.png";
import buro_tablet from "./assets/images/buro_tablet.png";
import buro_mobile from "./assets/images/buro_mobile.png";

import portfolio_desktop from "./assets/images/portfolio_desktop.png";
import portfolio_tablet from "./assets/images/portfolio_tablet.png";
import portfolio_mobile from "./assets/images/portfolio_mobile.png"

import edwin_mobile from "./assets/images/edwin_mobile.png";
import edwin_desktop from "./assets/images/edwin_desktop.png";

const appState: appStateType = {
  scrolled: false,
  windowWidth: 0,
  windowHeight: 0,
  showForm: false,
  sections: [
    {
      type: "header",
      title: "Hi! Ik ben Edwin Neef, een developer met een passie voor design",
      intro:
        "Ik word vrolijk van React, Typescript, HTML en CSS.",
      mail_button: { text: "Stuur mij een mail", email: "edwinneef@gmail.com" },
      secondary_button: "Meer over mij"
    },
    {
      type: "intro",
      title: "Over mij",
      intro_text:
        `Van jongs af aan ben ik veel bezig geweest met vormgeving en creatief denken. De laatste jaren houd ik mij voornamelijk bezig met development, waarbij mijn creatieve achtergrond vaker te pas komt dan ik eigenlijk verwacht had.`,
      image: { url: edwin_mobile, alt: "" },
      image_desktop: { url: edwin_desktop, alt: "" },
      text: [
        "Op de middelbare school kwam ik in aanraking met web design. Ik vond het geweldig om zogenaamde templates te maken en deze te delen op het internet. Elke dag keek ik of ik downloads had die dag, iets wat mijn geluksfactor toch wel beinvloedde. Ik werd daarom ook erg enthousiast toen iemand mij adviseerde om de templates te coderen, zodat nog meer mensen ze konden gebruiken.",
        "Dit was in de tijd dat coderen gelijk stond aan je photoshop bestand exporteren naar HTML. Het programma knipte automatisch je design in stukjes waardoor je op de juiste plekken tekst kon plaatsen. Zo hoefde je helaas eigenlijk niet veel zelf te doen.",
        "Als we doorspoelen naar vandaag de dag ben ik werkzaam als front-end developer, en man... wat een verschil! Het is mijn taak om een design juist te vertalen naar alle apparaten. Daarom mag ik veel samenwerken met designers, maar ben ik ook bezig met de logica achter het ontwerp. Een perfect fit dus!"
      ]
    },
    {
      type: "case",
      align: "left",
      color: "purple",
      title: "Mijn persoonlijke portfolio",
      text:
        "Wil je weten hoe mijn portfolio in elkaar zit? De code is te vinden op mijn github! Alle data wordt op een centraal punt opgeslagen waardoor het eenvoudig is om modules aan te passen, verwijderen of aanmaken. Het is gemaakt in React, Typescript en SASS.",
      buttons: [
        { text: 'Github Repo', url: 'https://github.com/edwinneef/portfolio'}
      ],
      image_desktop: portfolio_desktop,
      image_tablet: portfolio_tablet,
      image_mobile: portfolio_mobile
    },
    {
      type: "services",
      title: "Wat ik leuk vind",
      services: [
        {
          title: "Front-end development",
          icon: "frontend",
          text: "Momenteel mijn grootste passie. De vertaalslag zijn tussen design, gebruiker en apparaat is iets waar ik energie uit blijf halen."
        },
        {
          title: "Back-end development",
          icon: "backend",
          text: "Front-end en back-end development lopen vaak in elkaar over. Ik vind het leuk om de wat eenvoudigere back-end taken zelf op te pakken."
        },
        {
          title: "Betrokken worden bij het design",
          icon: "design",
          text: "Soms weet een designer niet of en hoe zijn/haar design vertaald kan worden met code. Ik vind het dan leuk om samen te zoeken naar een oplossing."
        }
      ]
    },
    {
      type: "case",
      align: "right",
      color: "turquoise",
      title: "Buro Souljazz",
      text:
        "Voor Buro Souljazz heb ik een Wordpress thema ontwikkelt zodat ze hun eigen website kunnen beheren. Ik heb o.a. gebruik gemaakt van PHP, ACF, TWIG, SASS, JavaScript en React.",
      buttons: [
        { text: 'Live demo', url: 'https://www.burosouljazz.com/', noFollow: true }
      ],
      image_desktop: buro_desktop,
      image_tablet: buro_tablet,
      image_mobile: buro_mobile
    },
    {
      type: "references",
      title: "Wat anderen zeggen",
      references: [
        {
          name: "Eelco",
          function: "Internet marketeer",
          text:
            "Sinds enige jaren werk ik geregeld samen met Edwin. Als online marketeer heb ik Edwin meerdere websites laten ontwerpen (design, front-end en back-end), waarbij mijn voorwaarden niet gering waren. Hierbij is het mij altijd opgevallen dat Edwin zijn kennis groot en divers is en dat hij altijd bereid is dieper in bepaalde materie te duiken. De samenwerking verliep hierin zeer prettig."
        },
        {
          name: "Hans Muelders",
          function: "Designer",
          company: "Hans Muelders",
          company_url: "https://www.hansmuelders.com/",
          text:
            "Ik heb het samenwerken met Edwin altijd als prettig ervaren omdat hij meedenkt met het vertalen van design naar front-end. Dit zorgt ervoor dat het geen overdracht maar teamwork is wat leidt tot een resultaat waar zowel de designer als de developer trots op is. Dat Edwin zich pro-actief opstelt en goed communiceert draagt hier zeker aan bij."
        },
        {
          name: "Rudi Sanders",
          function: "Founder & Drummer",
          company: "Buro Souljazz",
          company_url: "https://www.burosouljazz.com/",
          text:
            "Bij de realisatie van de site voor Buro Souljazz kwamen veel dingen naar voren die niet standaard waren. Edwin bleef daarbij telkens weer zoeken naar mogelijkheden om ze te realiseren. Zelden kreeg ik te horen dat iets technisch niet te realiseren was. Edwin heeft bij de bouw van de website van Buro Souljazz altijd een open houding getoond als het gaat om onze wensen. In de communicatie was hij constructief en kritisch waar nodig."
        }
      ]
    },
    {
      type: "case",
      align: "left",
      color: "tomato",
      title: "React form builder",
      text:
        "Een oefenproject waarbij een .JSON bestand omgezet wordt naar een formulier. Na het invullen wordt de ingevulde data weergegeven. Dit project maakt gebruik van React en TypeScript.",
      live_demo_url: "/react-form-builder",
      buttons: [
        {text: 'Github Repo', url: 'https://github.com/edwinneef/react-form-builder'}
      ],
      image_desktop: buro_desktop,
      image_tablet: buro_tablet,
      image_mobile: buro_mobile
    }
  ]
};

export default appState;
