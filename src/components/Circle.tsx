import { useEffect, useRef } from "react";

const Circle = () => {
  const body = document.querySelector("body");
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (body && circleRef.current) {
      body.onmousemove = (e) => {
        const [mouseX, mouseY] = [e.clientX, e.clientY];
        const [widthCircle, heightCircle] = [
          circleRef?.current!.offsetWidth / 2,
          circleRef?.current!.offsetHeight / 2,
        ];

        circleRef.current!.style.cssText = `left: ${
          mouseX - widthCircle
        }px; top: ${mouseY - heightCircle}px`;
      };
    }
  }, [body]);

  return (
    <div
      ref={circleRef}
      className="hidden md:block w-8 h-8 rounded-full border-2 border-blue-400 fixed -left-10 transition-all duration-500 ease-out z-[-1]"
    ></div>
  );
};

export default Circle;
