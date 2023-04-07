import MainImage from 'components/MainImage/MainImage'
import background from 'assets/main-image/favourites-image.jpeg'
import { BlogCard } from 'utils/blogCardsArray'
import BlogCardExtended from 'components/BlogCard/BlogCardExtended'

type Props = {
    data: BlogCard[]
}
const BlogCardDetails = ({ data }: Props) => {
    return (
        <>
            {/* <MainImage title="Article" img={background} /> */}
            <BlogCardExtended data={data} />
        </>
    )
}
export default BlogCardDetails
