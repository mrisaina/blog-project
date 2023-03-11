import CardItem from './CardItem'
import card1 from 'assets/cards-menu/card-menu-2.jpg'
import card2 from 'assets/cards-menu/card-menu-3.jpg'
import card3 from 'assets/cards-menu/card-menu-4.jpg'
import 'components/Slider/Slider.scss'
import 'components/Cards.scss'
import { Box } from '@mui/system'

type Props = {}
const CardsList = (props: Props) => {
    return (
        <div className="cards-list wrapper">
            <Box component="div" className="card-box">
                <CardItem
                    title="Crossfit workout"
                    description="Push your limits"
                    img={card1}
                ></CardItem>
            </Box>

            <Box component="div" className="card-box">
                <CardItem
                    title="Crossfit workout"
                    description="Push your limits"
                    img={card2}
                ></CardItem>
            </Box>

            <Box component="div" className="card-box">
                <CardItem
                    title="Crossfit workout"
                    description="Push your limits"
                    img={card3}
                ></CardItem>
            </Box>
        </div>
    )
}
export default CardsList
