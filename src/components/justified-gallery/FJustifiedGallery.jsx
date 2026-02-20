import React, { useEffect, useRef } from "react";
import fjGallery from "flickr-justified-gallery";
import "flickr-justified-gallery/src/fjGallery.css";
import { generateString } from "../../hooks/helper";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

// Removed FJustifiedGalleryProps interface entirely

function FJustifiedGallery({ images, className, children, options, ...restProps }) {
  // Removed ': FJustifiedGalleryProps'
  const ref = useRef();
  const generateId = generateString(5);

  useEffect(() => {
    if (!ref.current) return;

    // Initialize the justified gallery
    const gallery = fjGallery(ref.current, {
      itemSelector: ".fj-gallery-item",
      ...restProps,
    });

    // Initialize Fancybox
    NativeFancybox.bind("[data-fancybox]", {
      parentEl: ref.current,
      ...options,
    });

    return () => {
      // Proper cleanup for both libraries
      if (gallery) fjGallery(gallery, "destroy");
      NativeFancybox.destroy();
    };
  }, [restProps, options]); // Added dependencies for stability

  return (
    <div className={`fj-gallery ${className || ""}`} ref={ref}>
      {images && images.map(({ src, alt, caption, groupPopup }, index) => <FjgItem src={src} alt={alt} caption={caption} key={index} groupPopup={groupPopup || generateId} />)}
      {children}
    </div>
  );
}

FJustifiedGallery.defaultProps = {
  gutter: 15,
};

export function FjgItem({ src, alt, caption, groupPopup }) {
  return (
    <div className="fj-gallery-item" data-src={src} data-caption={caption} data-fancybox={groupPopup || ""}>
      <img src={src} alt={alt || ""} />
      {caption && (
        <div className="cap">
          <span>{caption}</span>
        </div>
      )}
    </div>
  );
}

FJustifiedGallery.item = FjgItem;

export default FJustifiedGallery;
