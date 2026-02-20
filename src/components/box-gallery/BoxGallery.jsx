import React, { useEffect, useRef } from "react";
import "./style.scss";
import "@fancyapps/ui/dist/fancybox.css";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import DsnGrid from "../DsnGrid";
import { generateString } from "../../hooks/helper";

// Removed boxGalleryProps interface and DsnGridProps import

function BoxGallery({ children, className, images, options, ...restProps }) {
  // Removed ': boxGalleryProps' type annotation

  const target = useRef();
  const generateId = generateString(5);

  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", { parentEl: target.current, ...options });

    return () => {
      NativeFancybox.destroy();
    };
  }, [options]); // Added options to dependency array for safety

  return (
    <div className={`dsn-box-gallery  ${className || ""}`} ref={target}>
      <DsnGrid {...restProps}>
        {images && images.map(({ src, alt, caption, groupPopup }, index) => <BoxGalleryItem src={src} alt={alt} caption={caption} key={index} groupPopup={groupPopup || generateId} />)}
        {children}
      </DsnGrid>
    </div>
  );
}

BoxGallery.defaultProps = {
  options: {
    infinite: false,
  },
};

export function BoxGalleryItem({ src, caption, groupPopup, className, ...restProps }) {
  return (
    src && (
      <div className={`item-box section-padding ${className || ""}`} {...restProps}>
        <div className="image-zoom p-relative">
          <div className="single-image" data-src={src} data-caption={caption} data-fancybox={groupPopup || ""}>
            <img className="cover-bg-img" src={src} alt={caption} />
          </div>
          {caption && <div className="caption">{caption}</div>}
        </div>
      </div>
    )
  );
}

BoxGallery.item = BoxGalleryItem;

export default BoxGallery;
