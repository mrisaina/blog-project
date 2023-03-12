import { Swiper, SwiperSlide } from 'swiper/react'
import img2 from 'assets/slider/slider-img-2.jpeg'
import img3 from 'assets/slider/slider-img-3.jpeg'
import { Pagination, Autoplay } from 'swiper'
import SliderText from './SliderText'
import 'swiper/css'
import 'swiper/css/pagination'
import 'components/Slider/Slider.scss'

type Props = {}
const Slider = (props: Props) => {
    return (
        <>
            <Swiper
                className="slider"
                slidesPerView={1}
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                speed={800}
                autoplay={{
                    delay: 5000,
                }}
            >
                <SwiperSlide>
                    <SliderText />
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderText />
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderText />
                    <img src={img3} alt="" />
                </SwiperSlide>
                ...
            </Swiper>
        </>
    )
}
export default Slider
