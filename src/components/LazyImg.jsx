import React, { useEffect, useState } from "react";

// interface LazyImgProps and React.ImgHTMLAttributes removed

function LazyImg({ src: lp, readAsBlob = true, targetRef, ...restProps }) {
  // Removed ': LazyImgProps' type annotation

  const [url, setUrl] = useState();

  useEffect(() => {
    if (!lp) return;

    fetch(lp)
      .then((response) => (readAsBlob ? response.blob() : response.url))
      .then((blob) => {
        if (!readAsBlob) {
          setUrl(blob);
        } else {
          const fr = new FileReader();
          fr.readAsDataURL(blob);
          fr.onload = function () {
            setUrl(this.result);
          };
        }
      })
      .catch((err) => console.error("LazyImg fetch error:", err));
  }, [lp, readAsBlob]);

  return <img src={url} alt={restProps.alt || "Droow Image"} style={{ opacity: url ? 1 : 0 }} width="100%" height="100%" {...restProps} ref={targetRef} />;
}

// In modern React, we can keep this or use default parameters in the function above
LazyImg.defaultProps = {
  readAsBlob: true,
};

export default LazyImg;
