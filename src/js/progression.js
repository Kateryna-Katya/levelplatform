import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".progression",
      start: "top 75%",
      toggleActions: "play none none none",
      once: true,
    },
  });

  tl.to(".fill-1", {
    width: "92%",
    duration: 0.7,
    ease: "power2.out",
  })
    .to(
      ".fill-2",
      {
        width: "82%",
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.45"
    )
    .to(
      ".fill-3",
      {
        width: "70%",
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.45"
    )
    .to(
      ".fill-4",
      {
        width: "60%",
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.45"
    )
    .to(
      ".fill-5",
      {
        width: "42%",
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.45"
    )
    .to(
      ".progression-dot",
      {
        opacity: 1,
        duration: 0.3,
        stagger: 0.08,
      },
      "-=0.5"
    );
});