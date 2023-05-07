// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FNHCard from "../FNHCard/index";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FNHText from "../FNHText/index"
              
import { Grid, useMediaQuery } from "@mui/material";

// import required modules
import { Pagination, Navigation } from "swiper";
import styles from "./style.module.scss";

import {Events} from "../../constants/index";

const FNHSlider = () => {
  const breakpoints = {
    xs: { slidesPerView: 1 },
    sm: { slidesPerView: 2 },
    md: { slidesPerView: 2},
    lg: { slidesPerView: 3 },
    xl: { slidesPerView: 3 },
  };

  const isXs = useMediaQuery("(max-width:800px)");
  const isSm = useMediaQuery("(min-width:801px) and (max-width:960px)");
  const isMd = useMediaQuery("(min-width:961px) and (max-width:1280px)");
  const isLg = useMediaQuery("(min-width:1281px)and (max-width:1580px)");
  const isXl = useMediaQuery("(min-width:1580)");
  const currentBreakpoint = isXs
    ? "xs"
    : isSm
    ? "sm"
    : isMd
    ? "md"
    : isLg
    ? "lg"
    : "xl";
  const slidesPerView = breakpoints[currentBreakpoint].slidesPerView;

  return (
    <>
     <FNHText
              variant="h6"
              text="Events"
              fontSize="3rem"
              color="#046380"
              fontWeight="700"
            />
      <Grid className={styles.silderGrid} >
     
        <Grid className={styles.sliderINside2}></Grid>
        <Grid className={styles.sliderINside1}>
        <Swiper
          slidesPerView={slidesPerView}
          loop={true}
          centeredSlides={false}
          grabCursor={true}
          pagination={true}
         spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination, Navigation]}
           className={styles.swiperOuter}
          navigation
        >
          {Events.map((event, id) => {
            return (
              <SwiperSlide className={styles.swiper_outer_card_border}>
                <FNHCard
                  key={id}
                  category={event.category}
                  name={event.name}
                  price={event.price}
                  backgroundImage={event.image}
                  location={event.location}
                  eventDetails={event.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        </Grid>
        <Grid className={styles.sliderINside2}></Grid>
       
      </Grid>
    </>
  );
};

export default FNHSlider;
