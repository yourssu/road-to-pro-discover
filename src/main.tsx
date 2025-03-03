import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import mixpanel from "mixpanel-browser";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, MotionPathPlugin, TextPlugin);
ScrollTrigger.config({ ignoreMobileResize: true });
if (ScrollTrigger.isTouch === 1) {
  ScrollTrigger.normalizeScroll(true);
}
mixpanel.init("04824511ec0eb6814c4e007d74ff2d3b", {
  track_pageview: "full-url",
  persistence: "localStorage",
})
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
