import React from 'react';

import MainScrollBar from "./MainScrollBar";
// Removed 'import type' and fixed the import to be a standard JS import
import { SmoothScrollbarProps } from "./SmoothScrollbar";
import DroowMenu from "../components/header/menu/DroowMenu";
import LoadingPage from "../hooks/LoadingPage";
import CustomCursor from "./CustomCursor";

// Removed the interface block entirely.
// JavaScript handles props as plain objects.

function Layout({ className, children, tag: Tag = "div", activeScrollbar, ...restProps }) {
  // Note: The ": LayoutProps" type definition was removed from the line above.

  return (
    <Tag id="main_layout" className={className}>
      <DroowMenu hamburger />
      <LoadingPage />
      {activeScrollbar ? <MainScrollBar {...restProps}>{children}</MainScrollBar> : children}
      <CustomCursor duration={0.5} durationChangeSize={0.3} size={30} scale={75} ease="power2.out" />
    </Tag>
  );
}

export default Layout;
