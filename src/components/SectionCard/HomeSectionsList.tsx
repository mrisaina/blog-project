import CardItem from './CardItem'
import card1 from 'assets/cards-menu/card-menu-2.jpg'
import card2 from 'assets/cards-menu/card-menu-3.jpg'
import card3 from 'assets/cards-menu/card-menu-4.jpg'
import avatar from 'assets/cards-menu/user-avatar.jpeg'
import 'components/Slider/Slider.scss'
import 'components/SectionCard/Cards.scss'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { filtersArray } from 'utils/filtersArray'

type Props = {
    setActiveFilter: React.Dispatch<React.SetStateAction<string[]>>
}

const HomeSectionsList = ({ setActiveFilter }: Props) => {
    return (
        <Box className="section-2">
            <Box className="cards-list wrapper">
                <Box className="card-box">
                    <CardItem
                        title="Crossfit workout"
                        description="Push your limits"
                        img={card1}
                        filter={filtersArray[1].category}
                        setActiveFilter={setActiveFilter}
                    ></CardItem>
                </Box>

                <Box className="card-box">
                    <CardItem
                        title="Team training"
                        description="Find a partner"
                        img={card2}
                        filter={filtersArray[2].category}
                        setActiveFilter={setActiveFilter}
                    ></CardItem>
                </Box>

                <Box className="card-box">
                    <CardItem
                        title="New gym apparel"
                        description="Look good, feel good"
                        img={card3}
                        filter={filtersArray[0].category}
                        setActiveFilter={setActiveFilter}
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
                    textShadow: '2px 2px 2px #000',
                }}
            >
                "How you respond to the challenge in the second half will
                determine what you become after the game, whether you are a
                winner or a loser."
            </Typography>

            <Box className="user">
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
export default HomeSectionsList
