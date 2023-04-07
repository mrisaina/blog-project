import { Box, Button } from '@mui/material'
import 'components/BlogCard/BlogCard.scss'
import { generatePath, useNavigate } from 'react-router-dom'
import arrow from '../../assets/arrow-right/arrow-right-black.svg'
import favsWhite from '../../assets/like/like-white.svg'
import favsRed from '../../assets/like/like-red.svg'
import { FavouritesList } from 'container/App/App'

type Props = {
    id: number
    title: string
    section: string
    img: string
    addToFavourites: (id: number) => void
    favouritesList: FavouritesList
}
const BlogCard = ({
    id,
    title,
    section,
    img,
    addToFavourites,
    favouritesList,
}: Props) => {
    const setColor = (section: string) => {
        switch (section) {
            case 'Food':
                return 'tag-blue'
            case 'Training':
                return 'tag-purple'
            case 'Partner training':
                return 'tag-pink'
        }
    }

    const navigate = useNavigate()

    const selectCard = (id: number) => {
        addToFavourites(id)
    }

    const handleProceed = () => {
        id && navigate(generatePath('/blog/:ids', { ids: `${id}` }))
    }

    return (
        <Box className="card-container">
            <img src={img} alt="img-blog"></img>
            <Box className="blog-card-text">
                <Box>
                    <Box className={`${setColor(section)} blog-card-section`}>
                        {section}
                    </Box>
                    <Box className="blog-card-title">{title}</Box>
                </Box>
                <Box className="card-actions">
                    <Box className="favs-icon-container">
                        <img
                            onClick={() => selectCard(id)}
                            src={
                                favouritesList.includes(id)
                                    ? favsRed
                                    : favsWhite
                            }
                            alt="favs-icon"
                        />
                    </Box>
                    <Button className="btn-read-more" onClick={handleProceed}>
                        Read more
                        <img
                            src={arrow}
                            alt="arrow-img"
                            className="arrow-img"
                        ></img>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
export default BlogCard
