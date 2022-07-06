import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Container } from "@mui/material";

import CatalogItem from "../CatalogItem";
import ListHeader from "../ListHeader";
import millitems from "../../../pages/api/catalog/goodsitems/milllistitem.json";

import "swiper/css";
import "swiper/css/navigation";
import styles from "../Stylelist.module.scss";

const MillList = () => {
    return (
        <Container id="mill_list" className={styles.catalog_list} maxWidth="xl">
            <ListHeader
                title="КАВОМОЛКИ"
                subtitle="Якщо треба змолоти каву вдома"
            />
            <Swiper
                slidesPerView={1.3}
                spaceBetween={10}
                breakpoints={{
                    850: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
                // rewind={true}
                navigation={true}
                modules={[Navigation, Pagination]}
            >
                {millitems.millitems.map((item) => (
                    <SwiperSlide key={item.name}>
                        <CatalogItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default MillList;
