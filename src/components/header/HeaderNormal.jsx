import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import { Container } from "react-bootstrap";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { dsnCN } from "../../hooks/helper";

// Removed HeaderNormalProps interface
// Removed the Type-only imports from react-bootstrap/helpers and react-bootstrap/Container

function HeaderNormal({ className, description, children, ...restProps }) {
  // Removed ': HeaderNormalProps'

  const head = useRef();
  const dot = useRef();

  useEffect(() => {
    // Ensure the elements exist before running GSAP
    if (!dot.current || !head.current) return;

    gsap.fromTo(
      dot.current,
      { yPercent: 60, autoAlpha: 0.05 },
      {
        yPercent: 100,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: head.current,
          start: "top top",
          scrub: true,
        },
      },
    );
  }, []); // Added empty dependency array to run once on mount

  return (
    <header className={dsnCN(style.hn, className)} ref={head}>
      <Container {...restProps}>
        <h1 className={`title-heading ${style.ht}`}>{children}</h1>
        {description && (
          <p className="mt-30 m-w570" style={{ letterSpacing: "1.2px" }}>
            {description}
          </p>
        )}
        <a href="#0" className={`view-case ${style.sd} mt-30`}>
          Scroll Down <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </Container>
      <div className={style.bcd} ref={dot} />
    </header>
  );
}

export default HeaderNormal;
