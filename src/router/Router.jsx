import React, { useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import useEffectLocation from "../hooks/useEffectLocation";

import "./style.scss";

// Lazy loaded views
const MainDemo = React.lazy(() => import("../views/home/MainDemo"));
const Demo2 = React.lazy(() => import("../views/home/Demo2"));
const Demo3 = React.lazy(() => import("../views/home/Demo3"));

const SliderOne = React.lazy(() => import("../views/slider/SliderOne"));
const SliderTow = React.lazy(() => import("../views/slider/SliderTow"));
const SliderThree = React.lazy(() => import("../views/slider/SliderThree"));

const Work = React.lazy(() => import("../views/Work"));
const WorkTow = React.lazy(() => import("../views/WorkTow"));
const ProjectDetails = React.lazy(() => import("../views/portfolio/ProjectDetails"));

const About = React.lazy(() => import("../views/About"));
const Contact = React.lazy(() => import("../views/Contact"));
const BlogDetails = React.lazy(() => import("../views/blog/BlogDetails"));

const Router = () => {
  const [transPage, setTransPage] = useState("in");

  // Removed TypeScript type annotation: React.MutableRefObject<null | Scrollbar>
  const scrollbar = useSelector((state) => state.scrollbar);

  const location = useEffectLocation(() => {
    setTransPage("out");
  });

  const onAnimateEnd = () => {
    if (transPage !== "out") return;

    // Reset scroll position on page change
    // Added safety check for scrollbar.current
    if (scrollbar && scrollbar.current) {
      scrollbar.current.scrollTo(0, 0, 0);
    }

    window.scrollTo({ left: 0, top: 0 });
    setTransPage("in");
  };

  return (
    <div id="dsn-content" className={`dsn-transition-page dsn-animate-${transPage}`} onAnimationEnd={onAnimateEnd}>
      <Suspense fallback={<div className="background-main h-100-v" />}>
        <Routes location={location}>
          <Route path="/" element={<MainDemo />} />
          <Route path="/demo-2" element={<Demo2 />} />
          <Route path="/demo-3" element={<Demo3 />} />

          <Route path="/slider" element={<SliderOne />} />
          <Route path="/slider-2" element={<SliderTow />} />
          <Route path="/slider-3" element={<SliderThree />} />

          <Route path="/portfolio" element={<Work />} />
          <Route path="/portfolio-2" element={<WorkTow />} />
          <Route path="/portfolio/:slug" element={<ProjectDetails />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default React.memo(Router);
