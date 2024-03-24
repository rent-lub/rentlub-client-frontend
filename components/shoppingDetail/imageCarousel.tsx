"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageCarouselProps {
  images: string[];
  width: number;
  height: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, width, height, ...props }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentImage(current),
  };
  return (
    <>
      <div className="relative">
        <Slider {...settings} adaptiveHeight={false} arrows>
          {images.map((item, index) => (
            <div key={item[index]} >
              <Image
                priority
                width={width}
                height={height}
                className="m-auto"
                src={images[index]}
                alt="image"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute right-1 bottom-10 text-white bg-black bg-opacity-70 px-4 py-1 text-sm rounded-xl">
          {currentImage + 1}/{images.length}
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
