import HomeSectionsList from 'components/SectionCard/HomeSectionsList'
import JoinForm from 'components/JoinForm/JoinForm'
import Slider from 'components/Slider/Slider'
import 'components/Slider/Slider.scss'
import VideoSection from 'components/VideoSectionHome/VideoSectionHome'

type Props = {}
const Home = (props: Props) => {
    return (
        <main className="main">
            <Slider />
            <HomeSectionsList />
            <VideoSection />
            <JoinForm />
        </main>
    )
}
export default Home
