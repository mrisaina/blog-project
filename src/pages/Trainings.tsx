import MainImage from 'components/MainImage/MainImage'
import background from 'assets/main-image/favourites-image.jpeg'
import { Box } from '@mui/system'
import 'components/BlogCard/BlogCard.scss'

type Props = {}
const Trainings = (props: Props) => {
    return (
        <>
            <MainImage title="Planned Trainings" img={background} />
            <Box className="blog-cards-list wrapper">
                <Box className="empty-page">
                    <p className="empty-page-text">Page is empty</p>
                </Box>
            </Box>
        </>
    )
}
export default Trainings
