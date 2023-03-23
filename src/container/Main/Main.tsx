import CardsList from 'components/SectionCard/HomeSectionsList'
import JoinForm from 'components/JoinForm/JoinForm'
import Slider from 'components/Slider/Slider'
import 'components/Slider/Slider.scss'
import VideoSection from 'components/VideoSectionHome/VideoSectionHome'

type Props = {}
const Main = (props: Props) => {
    return (
        <main className="main">
            <Slider />
            <CardsList />
            <VideoSection />
            <JoinForm />
        </main>
    )
}
export default Main
