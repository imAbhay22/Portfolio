import { createContext, useContext } from "react";

// Import fallback images directly
import onlineArtGalleryFallback from "../assets/Images/OnlineArtGallery.png";
import netflixFallback from "../assets/Images/Netflix.png";
import amazonFallback from "../assets/Images/Amazon.png";
import portfolioFallback from "../assets/Images/Portfolio.png";

const AppContext = createContext();

const Projects = [
  {
    src: "../assets/OnlineArtGallery.png",
    fallbackSrc: onlineArtGalleryFallback,
    route: "/onlineartgallery",
  },
  {
    src: "../assets/Netflix.png",
    fallbackSrc: netflixFallback,
    route: "/netflix",
  },
  {
    src: "../assets/Amazon.png",
    fallbackSrc: amazonFallback,
    route: "/amazon",
  },
  {
    src: "../assets/Portfolio.png",
    fallbackSrc: portfolioFallback,
    route: "/portfolio",
  },
];

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ Projects }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
