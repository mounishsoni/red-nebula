import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "../NavLink";
import { dsnCN } from "../../../hooks/helper";

// Removed the 'interface' and the complex type imports from react-bootstrap
// and fontawesome-svg-core as they are only used for Type Checking.

function ButtonDefault({ icon, text, className, ...restProps }, ref) {
  // Removed the ': ButtonDefaultProps' type annotation.
  // In JS, 'ref' is the second argument in a forwardRef function.

  return (
    <NavLink className={dsnCN("btn-default", className)} {...restProps} ref={ref}>
      {icon && (
        <span className="icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <span className="text">{text}</span>
    </NavLink>
  );
}

export default React.forwardRef(ButtonDefault);
