import Banner3 from "../../assets/banner2.png"
import Banner2 from "../../assets/banner.png"
import './header.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Header = () => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="header_banner">
            <img src={Banner2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_banner">
            <img src={Banner3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Header
