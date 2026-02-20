import React from "react";
import { Container } from "react-bootstrap";

import "./style.scss";
import NavLink from "../button/NavLink";
import { dsnCN } from "../../hooks/helper";

// Removed NextPageProps interface
// Removed Type-only imports (BsPrefixRefForwardingComponent, NavLinkProps)

function NextPage({ className, children, text, ...restProps }) {
  // Removed ': NextPageProps' type annotation

  return (
    <div className={dsnCN("next-page section-padding", className)}>
      <Container>
        <div className="c-wrap">
          <NavLink {...restProps}>
            <span className="hiring">{children}</span>
            <span className="career">{text}</span>
          </NavLink>
        </div>
      </Container>
    </div>
  );
}

export default NextPage;
