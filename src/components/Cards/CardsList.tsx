import CardItem from './CardItem'
import card1 from 'assets/cards-menu/card-menu-2.jpg'
import card2 from 'assets/cards-menu/card-menu-3.jpg'
import card3 from 'assets/cards-menu/card-menu-4.jpg'
import avatar from 'assets/cards-menu/user-avatar.jpeg'
import 'components/Slider/Slider.scss'
import 'components/Cards/Cards.scss'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

type Props = {}
const CardsList = (props: Props) => {
    return (
        <Box component="div" className="section-2">
            <Box component="div" className="cards-list wrapper">
                <Box component="div" className="card-box">
                    <CardItem
                        title="Crossfit workout"
                        description="Push your limits"
                        img={card1}
                    ></CardItem>
                </Box>

                <Box component="div" className="card-box">
                    <CardItem
                        title="Team training"
                        description="Find a partner"
                        img={card2}
                    ></CardItem>
                </Box>

                <Box component="div" className="card-box">
                    <CardItem
                        title="New gym apparel"
                        description="Look good, feel good"
                        img={card3}
                    ></CardItem>
                </Box>
            </Box>

            <Typography
                component="h3"
                variant="h3"
                sx={{
                    width: '1000px',
                    color: '#fff',
                    fontWeight: '700',
                    margin: '100px auto 80px auto',
                    textAlign: 'center',
                    letterSpacing: '-.06em',
                }}
            >
                "How you respond to the challenge in the second half will
                determine what you become after the game, whether you are a
                winner or a loser."
            </Typography>

            <Box component="div" className="user">
                <img src={avatar} alt="user-avatar" />
                <Box component="span" className="userName">
                    Brad Johnson
                </Box>
                <Box
                    component="span"
                    className="country"
                    sx={{ opacity: '0.7' }}
                >
                    Las Vegas
                </Box>
            </Box>
        </Box>
    )
}
export default CardsList
