import YoutubeEmbed from 'components/VideoSectionHome/YoutubeEmbed'
import 'components/VideosSection/VideoSection.scss'
import 'components/Slider/Slider.scss'
import { VideosArray } from 'utils/VideoSectionsArray'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

type Props = {
    sectionName: string
}
const VideoSection = ({ sectionName }: Props) => {
    return (
        <div className="section wrapper">
            <div className="section-title">{sectionName}</div>
            <div className="section-videos">
                <Swiper
                    direction={'horizontal'}
                    slidesPerView={2.5}
                    spaceBetween={30}
                    autoplay={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="videoSwiper"
                >
                    {VideosArray.filter(
                        ({ section }) => section === sectionName
                    ).map(({ id, embedId }) => {
                        return (
                            <>
                                <SwiperSlide key={id}>
                                    <YoutubeEmbed embedId={embedId} />
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}
export default VideoSection
