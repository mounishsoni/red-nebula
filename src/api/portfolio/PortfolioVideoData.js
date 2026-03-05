
const data = {
  "Commercial / TV": [
    {
      id: 1,
      title: "MyHeritage DNA - Reunite",
      src: "/assets/img/portfolio/documentary-event/adventure.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 2,
      title: "BRONTOS - Summit Miami, FL",
      src: "/assets/img/portfolio/documentary-event/brontos.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 3,
      title: "X-GAMES - The Life of Dave Mirra",
      src: "/assets/img/portfolio/documentary-event/x-games.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
  ],
  "Athletics / Apparel": [
    {
      id: 1,
      title: "MyHeritage DNA - Reunite",
      src: "/assets/img/portfolio/documentary-event/adventure.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 2,
      title: "BRONTOS - Summit Miami, FL",
      src: "/assets/img/portfolio/documentary-event/brontos.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 3,
      title: "X-GAMES - The Life of Dave Mirra",
      src: "/assets/img/portfolio/documentary-event/x-games.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
  ],
  "Tourism / Lifestyle": [
    {
      id: 1,
      title: "MyHeritage DNA - Reunite",
      src: "/assets/img/portfolio/documentary-event/adventure.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 2,
      title: "BRONTOS - Summit Miami, FL",
      src: "/assets/img/portfolio/documentary-event/brontos.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 3,
      title: "X-GAMES - The Life of Dave Mirra",
      src: "/assets/img/portfolio/documentary-event/x-games.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
  ],
  "Corporate / Web": [
    {
      id: 1,
      title: "MyHeritage DNA - Reunite",
      src: "/assets/img/portfolio/documentary-event/adventure.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 2,
      title: "BRONTOS - Summit Miami, FL",
      src: "/assets/img/portfolio/documentary-event/brontos.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 3,
      title: "X-GAMES - The Life of Dave Mirra",
      src: "/assets/img/portfolio/documentary-event/x-games.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
  ],
  "Music Videos / Film": [
    {
      id: 1,
      title: "MyHeritage DNA - Reunite",
      src: "/assets/img/portfolio/documentary-event/adventure.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 2,
      title: "BRONTOS - Summit Miami, FL",
      src: "/assets/img/portfolio/documentary-event/brontos.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 3,
      title: "X-GAMES - The Life of Dave Mirra",
      src: "/assets/img/portfolio/documentary-event/x-games.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
  ],
  "Documentaries / Events": [
    {
      id: 1,
      title: "MyHeritage DNA - Reunite",
      src: "/assets/img/portfolio/documentary-event/adventure.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 2,
      title: "BRONTOS - Summit Miami, FL",
      src: "/assets/img/portfolio/documentary-event/brontos.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
    {
      id: 3,
      title: "X-GAMES - The Life of Dave Mirra",
      src: "/assets/img/portfolio/documentary-event/x-games.png",
      description: "",
      href: "https://player.vimeo.com/video/226208418",
      overlay: 2,
    },
  ],
};

export const getPortfolioVideoData = () => data;

export const getPortfolioCategoryVideos = (categoryName) => {
  // Returns the array if found, otherwise an empty array to prevent .map() crashes
  console.log(`data`, data);
  return data[categoryName] || [];
};
