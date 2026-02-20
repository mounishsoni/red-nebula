import React, { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from "react-redux";
import { setOptionScroll, setScrollbar } from "../features/smooth-scrollbar/smoothScrollbarSlice";

// Removed type UseSmoothScrollbarHook and ScrollbarOptions import

const useSmoothScrollbar = (ref, option) => {
  // Removed ': React.RefObject<HTMLElement>' and ': UseSmoothScrollbarHook'

  const scrollbar = useRef(null);
  const [classNameScroll, setClassNameScroll] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ref.current) return;

    // Initialize smooth-scrollbar
    scrollbar.current = Scrollbar.init(ref.current, option);
    setClassNameScroll("dsn-scrollbar");

    // Tell GSAP ScrollTrigger to use this container as the scroller
    ScrollTrigger.defaults({
      scroller: ref.current,
    });

    // Sync ScrollTrigger with smooth-scrollbar updates
    scrollbar.current.addListener(() => ScrollTrigger.refresh());

    // Update Redux state
    dispatch(setScrollbar(scrollbar.current));
    dispatch(setOptionScroll(option));

    return () => {
      if (scrollbar.current) {
        scrollbar.current.destroy();
      }
      setClassNameScroll("");
      ScrollTrigger.defaults({
        scroller: window, // Reset scroller to window on unmount
      });
    };
  }, [ref, option, dispatch]); // Added dependencies for hook stability

  return [scrollbar, classNameScroll];
};

export default useSmoothScrollbar;
