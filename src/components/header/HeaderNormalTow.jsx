import React from "react";
import style from "./style.module.scss";
import { Container } from "react-bootstrap";
import { dsnCN } from "../../hooks/helper";

// Removed HeaderNormalProps interface
// Removed the Type-only imports (BsPrefixRefForwardingComponent, ContainerProps)

function HeaderNormal({ className, description, children, ...restProps }) {
  // Removed the ': HeaderNormalProps' type annotation

  return (
    <header className={dsnCN(style.hn2, className)}>
      <Container {...restProps}>
        {description && <h5 className={`mb-10 m-w570 ${style.hd}`}>{description}</h5>}
        <h1 className={`title-heading ${style.ht}`}>{children}</h1>
      </Container>
    </header>
  );
}

export default HeaderNormal;
