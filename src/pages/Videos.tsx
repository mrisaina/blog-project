import MainImage from 'components/MainImage/MainImage'
import background from 'assets/main-image/videos-image-2.jpeg'
import VideoSection from 'components/VideosSection/VideoSection'
import { VideosArray } from 'utils/VideoSectionsArray'

type Props = {}
const Videos = (props: Props) => {
    const section1 = 'Fast Training'
    const section2 = 'Receipes'
    const section3 = 'Strength Training'

    // const videoSectionId = (name: string) =>
    //     VideosArray.find((el) => el.section === name)?.sectionId

    console.log(VideosArray.filter(({ section }) => section === section1))
    // const id = videoSectionId(section1)
    // console.log(id)

    return (
        <>
            <MainImage
                title="Watch my latest videos"
                description="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus."
                img={background}
            />
            <div className="video-sections-container">
                <VideoSection
                    key={
                        VideosArray.find((el) => el.section === section1)
                            ?.sectionId
                    }
                    sectionName={section1}
                />
                <VideoSection
                    key={
                        VideosArray.find((el) => el.section === section2)
                            ?.sectionId
                    }
                    sectionName={section2}
                />
                <VideoSection
                    key={
                        VideosArray.find((el) => el.section === section3)
                            ?.sectionId
                    }
                    sectionName={section3}
                />
            </div>
        </>
    )
}
export default Videos
