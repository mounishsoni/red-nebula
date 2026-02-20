import React, { useLayoutEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

// Removed SmoothScrollbarProps interface and OverscrollOptions import

function SmoothScrollbar({ children, tag: Tag = "div", refTarget, height, option = {}, ...restProps }) {
  // Removed ': SmoothScrollbarProps' type annotation
  const scrollbar = useRef();

  useLayoutEffect(() => {
    if (!scrollbar.current) return;

    // Initialize plugins if specified in options
    if (option?.plugins) {
      Scrollbar.use(OverscrollPlugin);
    }

    const scroll = Scrollbar.init(scrollbar.current, option);

    // Pass the scroll instance back to parent if refTarget callback exists
    if (typeof refTarget === "function") {
      refTarget(scroll, scrollbar.current);
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [option, refTarget]);

  return (
    <Tag {...restProps} ref={scrollbar} style={{ overflow: "hidden", height: height }}>
      {children}
    </Tag>
  );
}

SmoothScrollbar.defaultProps = {
  height: "100vh",
  option: {},
};

export default SmoothScrollbar;
