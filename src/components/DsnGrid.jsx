import React from "react";

const DsnGrid = React.forwardRef((props, ref) => {
  const {
    className,
    // Setting default values here instead of the interface
    col = 1,
    colTablet = 1,
    colMobile = 1,
    colGap = 30,
    colGapTablet = 30,
    colGapMobile = 30,
    rowGap = 30,
    rowGapTablet = 30,
    rowGapMobile = 30,
    children,
  } = props;

  const gapPx = ($param) => {
    if (!isNaN($param) && $param !== "") return $param + "px";
    return $param;
  };

  return (
    <div
      style={{
        "--dsn-col-number": col,
        "--dsn-col-number-tablet": colTablet,
        "--dsn-col-number-mobile": colMobile,
        "--dsn-col-gap": gapPx(colGap),
        "--dsn-col-gap-tablet": gapPx(colGapTablet),
        "--dsn-col-gap-mobile": gapPx(colGapMobile),
        "--dsn-row-gap": gapPx(rowGap),
        "--dsn-row-gap-tablet": gapPx(rowGapTablet),
        "--dsn-row-gap-mobile": gapPx(rowGapMobile),
      }}
      className={`dsn-grid-layout ${className || ""}`}
      ref={ref}
    >
      {children}
    </div>
  );
});

DsnGrid.displayName = "DsnGrid";

export default React.memo(DsnGrid);
