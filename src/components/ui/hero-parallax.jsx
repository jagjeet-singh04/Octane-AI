"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const MDiv = motion.div;



export const HeroParallax = ({
  // Backward-compat: original API used `products`
  products,
  // New generic API
  items,
  renderItem,
  // Header controls
  header,
  showHeader = true,
}) => {
  const data = (items ?? products ?? []).slice(0, 15);
  const firstRow = data.slice(0, 5);
  const secondRow = data.slice(5, 10);
  const thirdRow = data.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      {showHeader ? (header ? header : <Header />) : null}
      <MDiv
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <MDiv className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((item, idx) => (
            renderItem ? (
              <ParallaxItem key={(item && (item.key || item.id || item.title)) ?? `item-1-${idx}`}
                translate={translateX}
              >
                {renderItem(item, idx)}
              </ParallaxItem>
            ) : (
              <ProductCard product={item} translate={translateX} key={(item && item.title) ?? `product-1-${idx}`} />
            )
          ))}
        </MDiv>
        <MDiv className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((item, idx) => (
            renderItem ? (
              <ParallaxItem key={(item && (item.key || item.id || item.title)) ?? `item-2-${idx}`}
                translate={translateXReverse}
              >
                {renderItem(item, idx + firstRow.length)}
              </ParallaxItem>
            ) : (
              <ProductCard product={item} translate={translateXReverse} key={(item && item.title) ?? `product-2-${idx}`} />
            )
          ))}
        </MDiv>
        <MDiv className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((item, idx) => (
            renderItem ? (
              <ParallaxItem key={(item && (item.key || item.id || item.title)) ?? `item-3-${idx}`}
                translate={translateX}
              >
                {renderItem(item, idx + firstRow.length + secondRow.length)}
              </ParallaxItem>
            ) : (
              <ProductCard product={item} translate={translateX} key={(item && item.title) ?? `product-3-${idx}`} />
            )
          ))}
        </MDiv>
      </MDiv>
    </div>
  );
};

export const Header = () => {
  return (
    <div
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        The Ultimate <br /> Learning studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        We are a team of passionate developers and designers that love to build
        amazing products that help you grow in your professional life.
      </p>
    </div>
  );
};

// Generic wrapper for custom parallax items to reuse motion + sizing
export const ParallaxItem = ({ translate, children }) => {
  return (
    <MDiv
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group h-96 w-[30rem] relative shrink-0"
    >
      {children}
    </MDiv>
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    <MDiv
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0">
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title} />
      </a>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </MDiv>
  );
};
