import { useSelector } from "react-redux";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

import { selectItemPage } from "../../store/selectors";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const SwipeImage = () => {
    const { itemdata } = useSelector(selectItemPage);
    const { name, list_img } = itemdata;
    return (
        <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 10,
                shadowScale: 0.8,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
        >
            {list_img?.map((item, i) => (
                <SwiperSlide key={i}>
                    <Image
                        src={
                            item
                                ? `/goodsimages/${item}`
                                : `/goodsimages/wait_1.webp`
                        }
                        alt={name}
                        width={350}
                        height={350}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwipeImage;
