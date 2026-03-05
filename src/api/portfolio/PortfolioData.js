import React from "react";
import PortfolioVideoPage from "../../views/portfolio/PortfolioVideoPage";
import TimeTagWatch from "../../views/portfolio/TimeTagWatch";

const data = [
  {
    id: 1,
    title: "Commercial / TV",
    slug: "commercial-tv",
    src: "/assets/img/project/project2/commercial-tv-portfolio-banner.png",
    srcSlider: "/assets/img/project/project2/commercial-tv-portfolio-banner.png",
    category: ["Portfolio"],
    description: "",
    overlay: 2,
    textButtonLabel: "View Portfolio",
    component: (props) => <PortfolioVideoPage {...props} nextId={2} />,
  },
  {
    id: 2,
    title: "Athletics / Apparel",
    slug: "athletics-apparel",
    src: "/assets/img/project/project3/athletics-apparel-portfolio-banner.png",
    srcSlider: "/assets/img/project/project3/athletics-apparel-portfolio-banner.png",
    category: ["Portfolio"],
    description: "",
    overlay: 2,
    textButtonLabel: "View Portfolio",
    component: (props) => <PortfolioVideoPage {...props} nextId={3} />,
  },
  {
    id: 3,
    title: "Tourism / Lifestyle",
    slug: "tourism-lifestyle",
    src: "/assets/img/project/project4/tourism-lifestyle-portfolio-banner.png",
    srcSlider: "/assets/img/project/project4/tourism-lifestyle-portfolio-banner.png",
    category: ["Portfolio"],
    description: "",
    overlay: 2,
    textButtonLabel: "View Portfolio",
    component: (props) => <PortfolioVideoPage {...props} nextId={4} />,
  },
  {
    id: 4,
    title: "Corporate / Web",
    slug: "corporate-web",
    src: "/assets/img/project/project5/corporate-web-portfolio-banner.png",
    srcSlider: "/assets/img/project/project5/corporate-web-portfolio-banner.png",
    category: ["Portfolio"],
    description: "",
    overlay: 2,
    textButtonLabel: "View Portfolio",
    component: (props) => <PortfolioVideoPage {...props} nextId={5} />,
  },
  {
    id: 5,
    title: "Music Videos / Film",
    slug: "music-videos-film",
    src: "/assets/img/project/project6/music-videos-film-portfolio-banner.png",
    srcSlider: "/assets/img/project/project6/music-videos-film-portfolio-banner.png",
    category: ["Portfolio"],
    description: "",
    overlay: 2,
    textButtonLabel: "View Portfolio",
    component: (props) => <PortfolioVideoPage {...props} nextId={6} />,
  },
  {
    id: 6,
    title: "Documentaries / Events",
    slug: "documentaries-events",
    src: "/assets/img/project/sleep-walker/documentaries-events-portfolio-banner.png",
    srcSlider: "/assets/img/project/sleep-walker/documentaries-events-portfolio-banner.png",
    category: ["Portfolio"],
    description: "",
    overlay: 2,
    textButtonLabel: "View Portfolio",
    component: (props) => <PortfolioVideoPage {...props} nextId={7} />,
  },
  // {
  //   id: 7,
  //   title: "Novara Conic",
  //   slug: "novara-conic",
  //   src: "/assets/img/project/project8/1.jpg",
  //   srcSlider: "/assets/img/project/project8/4.jpg",
  //   category: ["Architecture"],
  //   description: "Cal was first. The first public university in the great state of California. They are the pioneers.",
  //   overlay: 2,
  //   textButtonLabel: "View Case",
  //   component: (props) => <NovaraConic {...props} />,
  // },
  // {
  //   id: 8,
  //   title: "Bastian Bux",
  //   slug: "bastian-bux",
  //   category: ["Photography"],
  //   description: "Bastian bux is the consequence of reducing everything surrounding a dj and producer to its essential element: the music.",
  //   src: "/assets/img/project/project9/1.jpg",
  //   srcSlider: "/assets/img/project/project9/3.jpg",
  //   overlay: 2,
  //   textButtonLabel: "View Case",
  //   component: (props) => <BastianBux {...props} />,
  // },
  {
    id: 7,
    title: "Our Film Gear",
    slug: "rental-gear",
    category: ["Rental"],
    description:
      "At Red Nebula, we have a rich variety of production equipment to help achieve the perfect look for every video. Every tool used on a video shoot has its purpose, therefore we have a seemingly endless list.  Therefore, this page is dedicated to our favorites as well as most requested.  Give us a call for specific request, we love making use of everything we have to offer.",
    src: "/assets/img/team/brett.jpg",
    srcSlider: "/assets/img/team/brett.jpg",
    overlay: 2,
    textButtonLabel: "Browse Gears",
    component: (props) => <TimeTagWatch {...props} />,
  },
];

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
  return data.find((item) => {
    if (item[whereName] === value) return item;
    return null;
  });
};

export const getPortfolioLink = (item) => {
  if (item) return item.slug && "/portfolio/" + item.slug;
  return "";
};
