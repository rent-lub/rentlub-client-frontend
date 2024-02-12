import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageCarousel = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/30/20/2000007885530/2000007885530_1-20231226164926-.jpg"
            width={500}
            height={500}
            alt="Product"
            className="rounded-xl object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://resource.nationtv.tv/uploads/images/md/2022/03/1bEPuf4wZD8ToCld5jcp.webp?x-image-process=style/lg"
            width={500}
            height={500}
            alt="Product"
            className="rounded-xl object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/30/20/2000007885530/2000007885530_1-20231226164926-.jpg"
            width={500}
            height={500}
            alt="Product"
            className="rounded-xl object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/30/20/2000007885530/2000007885530_1-20231226164926-.jpg"
            width={500}
            height={500}
            alt="Product"
            className="rounded-xl object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageCarousel;
