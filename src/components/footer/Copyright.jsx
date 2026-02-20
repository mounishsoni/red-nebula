import React from "react";
import { dsnCN } from "../../hooks/helper";

function Copyright({ className, ...restProps }) {
  return (
    <div className={dsnCN("copyright", className)} {...restProps}>
      <div className="text-center">
        <p>© {new Date().getFullYear()} Red Nebula LLC</p>
        <div className="copyright-text over-hidden">
          Designed by <span style={{ color: "darkOrange" }}>PRISH</span>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
