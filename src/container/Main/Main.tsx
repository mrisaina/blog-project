import CardsList from 'components/Cards/CardsList'
import Slider from 'components/Slider/Slider'
import 'components/Slider/Slider.scss'

type Props = {}
const Main = (props: Props) => {
    return (
        <main className="main">
            <Slider />
            <CardsList />
        </main>
    )
}
export default Main
