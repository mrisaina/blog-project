import MainImage from 'components/MainImage/MainImage'
import background from 'assets/main-image/videos-image-2.jpeg'
import VideoSection from 'components/VideosSection/VideoSection'

type Props = {}
const Videos = (props: Props) => {
    const section1 = 'Fast Training'
    const section2 = 'Receipes'
    const section3 = 'Strength Training'

    return (
        <>
            <MainImage
                title="Watch my latest videos"
                description="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus."
                img={background}
            />
            <div className="video-sections-container">
                <VideoSection sectionName={section1} />
                <VideoSection sectionName={section2} />
                <VideoSection sectionName={section3} />
            </div>
        </>
    )
}
export default Videos
