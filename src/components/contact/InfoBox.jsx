import React from "react";
import "./style.scss";
import { dsnCN } from "../../hooks/helper";

function InfoBox({ className }) {
  return (
    <div className={dsnCN("box-info-contact", className)}>
      <h3>Start a new project?</h3>
      {/* <h5 className="mt-30">Visit our studio at</h5> */}
      {/* <p className="mt-10">We are located in North Carolina and Atlanta, GA</p> */}
      <br />
      <br />
      <h5>Atlanta, GA</h5>
      <ul className="mt-20">
        <li>
          <span className="mr-10">Call Us</span>
          <a href="tel:+14046666165" target="_blank" rel="noreferrer">
            +1 (404) 666-6165
          </a>
        </li>
        {/* <li>
          <span className="mr-10">Whatsapp</span>
          <a href="http://wa.me/+1 (800) 990 8877" target="_blank" rel="noreferrer">
            +1 (800) 990 8877
          </a>
        </li> */}
        <li>
          <span className="mr-10">Email</span>
          <a href="mailto:brett@rednebula.tv" target="_blank" rel="noreferrer">
            brett@rednebula.tv
          </a>
        </li>
        <li>
          <span className="mr-10">Address</span>
          <a href="#0" target="_blank" rel="noreferrer">
            Atlanta, GA
          </a>
        </li>
      </ul>

      <br />
      <br />

      <h5>North Carolina</h5>
      <ul className="mt-20">
        <li>
          <span className="mr-10">Call Us</span>
          <a href="tel:+13364042363" target="_blank" rel="noreferrer">
            +1 (336) 404-2363
          </a>
        </li>
        {/* <li>
          <span className="mr-10">Whatsapp</span>
          <a href="http://wa.me/+1 (800) 990 8877" target="_blank" rel="noreferrer">
            +1 (800) 990 8877
          </a>
        </li> */}
        <li>
          <span className="mr-10">Email</span>
          <a href="mailto:brett@rednebula.tv" target="_blank" rel="noreferrer">
            brett@rednebula.tv
          </a>
        </li>
        <li>
          <span className="mr-10">Address</span>
          <a href="#0" target="_blank" rel="noreferrer">
            North Carolina
          </a>
        </li>
      </ul>
    </div>
  );
}

export default InfoBox;
