import MainImage from 'components/MainImage/MainImage'
import background from 'assets/main-image/favourites-image.jpeg'
import { useParams } from 'react-router-dom'

type Props = {}
const BlogCardExtended = (props: Props) => {
    const { id } = useParams()

    return (
        <>
            <MainImage title="text" img={background} />
        </>
    )
}
export default BlogCardExtended
