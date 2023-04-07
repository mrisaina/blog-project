import { BlogCard } from 'utils/blogCardsArray'
import BlogCardExtended from 'components/BlogCard/BlogCardExtended'

type Props = {
    data: BlogCard[]
}
const BlogCardDetails = ({ data }: Props) => {
    return (
        <>
            <BlogCardExtended data={data} />
        </>
    )
}
export default BlogCardDetails
