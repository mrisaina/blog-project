import Box from '@mui/material/Box/Box'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BlogCard } from 'utils/blogCardsArray'
import '../BlogCard/BlogCardExtended.scss'
import Comments from 'components/Comments/Comments'

type Props = {
    data: BlogCard[]
}
const BlogCardExtended = ({ data }: Props) => {
    const { id } = useParams()
    const el = data.find((card) => Number(id) === card.id)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <Box className="blog-card-extended wrapper">
            <Box className="main-info">
                <Box
                    className="card-img"
                    sx={{ backgroundImage: `url(..${el?.img})` }}
                ></Box>
                <Box className="card-title">{el!.title}</Box>
                <Box className="card-details">
                    <Box className="card-section">{el?.section}</Box>
                    <Box className="card-author">{el!.author}</Box>
                </Box>
                <Box className="card-desc">{el?.desc.split('\n\n')}</Box>
            </Box>
            <Box className="comments">
                <Comments />
            </Box>
        </Box>
    )
}
export default BlogCardExtended
