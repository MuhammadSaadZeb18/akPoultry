// // export const container = {
// //   hidden: { opacity: 0 },
// //   show: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.12 },
// //   },
// // };

// // export const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   show: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.6, ease: "easeOut" },
// //   },
// // };

// import { useEffect, useRef, useState } from "react";

// export const useInViewOnce = (threshold = 0.25) => {
//   const ref = (useRef < HTMLElement) | (null > null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // run only once
//         }
//       },
//       { threshold }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);

//   return { ref, isVisible };
// };
