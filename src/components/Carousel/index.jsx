import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Students1 from "../../assets/images/Students_1.jpg";
import Students2 from "../../assets/images/Students_2.jpg";
import Students3 from "../../assets/images/Students_3.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
    const data = [
        {
            id: 1,
            img: Students1,
        },
        {
            id: 2,
            img: Students2,
        },
        {
            id: 3,
            img: Students3,
        },
    ];
    return (
        <div className="-z-10">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative w-full h-[50vh] lg:h-[80vh] overflow-hidden">
                            <img
                                className="absolute top-[50%] h-full lg:w-full lg:h-auto left-[50%] translate-x-[-50%] translate-y-[-50%]"
                                src={item.img}
                                alt="Carousel rasmi"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
