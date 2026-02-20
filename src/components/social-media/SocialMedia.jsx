import React, { useEffect, useRef } from "react";
import { dsnCN } from "../../hooks/helper";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faVimeo, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { splittingItems } from "../../hooks/Spltting";

function SocialMedia({ className }) {
  const ref = useRef();
  const socialData = [
    { link: "https://www.facebook.com/rednebuladigital", icon: faFacebookF },
    { link: "https://vimeo.com/brettmullen", icon: faVimeo },
    { link: "https://www.instagram.com/red.nebula.film", icon: faInstagram },
    { link: "https://www.youtube.com/@rednebulafilm9808", icon: faYoutube },
  ];

  useEffect(() => {
    splittingItems(ref.current, "li");
  });

  return (
    <ul className={dsnCN("social-one", className)} ref={ref}>
      {socialData.map((item, index) => (
        <li key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;
