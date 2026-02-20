import React from "react";
import { dsnCN } from "../../../hooks/helper";
import SocialMedia from "../../social-media/SocialMedia";

function MenuContent({ className }) {
  const socialData = [
    { link: "#0", name: "Dribbble." },
    { link: "#0", name: "Behance." },
    { link: "#0", name: "Linkedin." },
    { link: "#0", name: "Twitter." },
  ];
  return (
    <div className={dsnCN("container-content  d-flex flex-column justify-content-center", className)}>
      <div className="nav__info">
        <div className="nav-content">
          <h5 className="sm-title-block mb-10">Studio</h5>
          <p>
            Atlanta, GA <br /> North Carolina
          </p>
        </div>
        <div className="nav-content mt-30">
          <h5 className="sm-title-block mb-10">Contact</h5>
          <p className="links over-hidden mb-1">
            <a className="link-hover" href="tel:14046666165" data-hover-text="+1 (404) 666-6165 (GA)">
              +1 (404) 666-6165 (GA)
            </a>
            {" | "}
            <a className="link-hover" href="tel:13364042363" data-hover-text="+1 (336) 404-2363 (NC)">
              +1 (336) 404-2363 (NC)
            </a>
          </p>
          <p className="links over-hidden">
            <a className="link-hover" href="mailto:brett@rednebula.tv" data-hover-text="brett@rednebula.tv">
              brett@rednebula.tv
            </a>
          </p>
        </div>
      </div>
      <div className="nav-social nav-content mt-30">
        <div className="nav-social-inner p-relative">
          <h5 className="sm-title-block mb-10">Follow us</h5>
          {/* <ul>
            {socialData.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul> */}
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
