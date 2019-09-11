import { appStateType } from "./types";

const appState: appStateType = {
  scrolled: false,
  windowWidth: 0,
  windowHeight: 0,
  sections: [
    {
      type: "header",
      title: "Hi! Ik ben Edwin, een developer",
      intro:
        "die zich in zijn vrije tijd ook graag bezig houdt met UI en UX design.",
      mail_button: { text: "Neem contact op", email: "edwinneef@gmail.com" },
      secondary_button: "Meer over mij"
    },
    {
      type: "intro",
      title: "Over mij",
      intro_text:
        `Van jongs af aan ben ik veel bezig geweest met vormgeving en creatief denken. De laatste jaren houd ik mij voornamelijk bezig met development, waarbij mijn creatieve achtergrond vaker te pas komt dan ik eigenlijk verwacht had.`,
      image: { url: "http://placekitten.com/650/300", alt: "" },
      image_desktop: { url: "https://edwinneef.nl/img/avatar.jpg", alt: "" },
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
      github_url: "https://github.com/edwinneef/portfolio"
    },
    {
      type: "services",
      title: "Wat ik leuk vind",
      services: [
        {
          title: "Front-end development",
          icon: "front-end",
          text: "Mijn grootste passie. De vertaalslag zijn tussen design, gebruiker en apparaat is iets waar ik energie uit blijf halen."
        },
        {
          title: "Back-end development",
          icon: "back-end",
          text: "Front-end en back-end development lopen vaak in elkaar over. Ik vind het leuk om de wat eenvoudigere back-end taken zelf op te pakken."
        },
        {
          title: "Design",
          icon: "design",
          text: "Soms weet een designer niet hoe moeilijk zijn/haar design vertaald kan worden met code. Ik vind het dan leuk om samen te zoeken naar een oplossing."
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
      live_demo_url: "https://www.burosouljazz.com",
    },
    {
      type: "references",
      title: "Wat anderen zeggen",
      references: [
        {
          name: "Dominique van der Mast",
          function: "Illustrator bij ZZP",
          text:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
        },
        {
          name: "Edwin Neef",
          function: "Developer bij Vidda Digital",
          text:
            "Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus."
        },
        {
          name: "Eelco Jongedijk",
          function: "Internet marketeer bij ZZP",
          text:
            "Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean Euismod Lorem Venenatis Ornare."
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
      github_url: "https://github.com/edwinneef/react-form-builder"
    }
  ]
};

export default appState;
