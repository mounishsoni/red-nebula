import React from "react";
import { dsnCN } from "../../hooks/helper";

function AddressFooter({ className, ...restProps }) {
  return (
    <div className={dsnCN("col-address", className)} {...restProps}>
      <p>
        <strong>Atlanta, GA</strong> <span>:</span> (404) 666-6165
      </p>
      <p className="mt-2">
        <strong>North Carolina</strong> <span>:</span> (336) 404-2363
      </p>
    </div>
  );
}

export default AddressFooter;
