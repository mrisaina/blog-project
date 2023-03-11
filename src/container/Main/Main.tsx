import Slider from 'components/Slider'
import 'components/Slider.scss'

type Props = {}
const Main = (props: Props) => {
    return (
        <div className="main">
            <div className="slider-container">
                <Slider />
            </div>
        </div>
    )
}
export default Main
