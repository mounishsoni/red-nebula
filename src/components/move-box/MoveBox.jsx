import React, { useLayoutEffect, useRef } from "react";
import "./style.scss";
import MoveTrigger from "../../animation/MoveTrigger";
import { Container } from "react-bootstrap";
import { dsnCN } from "../../hooks/helper";

// Removed MoveBoxProps interface
// Removed MoveTriggerProps type-only import

function MoveBox({ bgColor = "section", free = true, className, children, ...restProps }) {
  // Removed ': MoveBoxProps' type annotation
  const refEl = useRef();

  useLayoutEffect(() => {
    if (!refEl.current) return;

    const parentEl = refEl.current.closest(".section-margin");
    if (parentEl) parentEl.classList.add("section-margin-move");
  }, []);

  return (
    <MoveTrigger {...restProps}>
      {(ref) => (
        <Container className={dsnCN("dsn-move-section", !free && "p-relative", className)} ref={ref}>
          <div className={`inner-box background-${bgColor}`} ref={refEl}>
            {children}
          </div>
        </Container>
      )}
    </MoveTrigger>
  );
}

MoveBox.defaultProps = {
  bgColor: "section",
  free: true,
  from: { y: 100 },
  to: { y: -100 },
  ease: "none",
  start: "100%",
  end: "0%",
  scrub: true,
  markers: false,
  stagger: null,
  tablet: false,
  mobile: false,
};

export default MoveBox;
