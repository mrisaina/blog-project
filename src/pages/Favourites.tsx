import MainImage from 'components/MainImage/MainImage'
import background from 'assets/main-image/favourites-image.jpeg'
import { FavouritesList } from 'container/App/App'
import blogCardsArray from 'utils/blogCardsArray'
import BlogCard from 'components/BlogCard/BlogCard'
import { Box } from '@mui/system'
import 'components/BlogCard/BlogCard.scss'

type Props = {
    favouritesList: FavouritesList
    addToFavourites: (id: number) => void
}
const Favourites = ({ favouritesList, addToFavourites }: Props) => {
    return (
        <>
            <MainImage title="Favourites" img={background} />
            <Box className="blog-cards-list wrapper">
                {favouritesList.length ? (
                    Object.values(favouritesList).map((id) => {
                        const card = blogCardsArray[Number(id) - 1]
                        return (
                            <Box key={Number(id)}>
                                <BlogCard
                                    id={card.id}
                                    title={card.title}
                                    section={card.section}
                                    img={card.img}
                                    addToFavourites={addToFavourites}
                                    favouritesList={favouritesList}
                                />
                            </Box>
                        )
                    })
                ) : (
                    <Box className="empty-page">
                        <p className="empty-page-text">Page is empty</p>
                    </Box>
                )}
            </Box>
        </>
    )
}
export default Favourites
