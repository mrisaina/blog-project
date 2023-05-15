import YoutubeEmbed from 'components/VideoSectionHome/YoutubeEmbed'
import 'components/VideosSection/VideoSection.scss'
import 'components/Slider/Slider.scss'
import { VideosArray } from 'utils/VideoSectionsArray'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'

type Props = {
    sectionName: string
}
const VideoSection = ({ sectionName }: Props) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 4000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="section wrapper">
            <div className="section-title">{sectionName}</div>
            {isLoading && (
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#ffffff"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass="ball-triangle-loading"
                    visible={true}
                />
            )}
            <div
                className="section-videos"
                style={{ display: isLoading ? 'none' : 'block' }}
            >
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
                            <SwiperSlide key={id}>
                                <YoutubeEmbed embedId={embedId} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}
export default VideoSection
