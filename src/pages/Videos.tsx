import MainImage from 'components/MainImage/MainImage'
import background from 'assets/videos-image-2.jpeg'
import VideoSection from 'components/VideosSection/VideoSection'

type Props = {}
const Videos = (props: Props) => {
    return (
        <>
            <MainImage
                title="Watch my latest videos"
                description="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus."
                img={background}
            />
            <div className="video-sections-container">
                <VideoSection sectionName="Fast Training" />
                <VideoSection sectionName="Receipes" />
                <VideoSection sectionName="Strength Training" />
            </div>
        </>
    )
}
export default Videos
