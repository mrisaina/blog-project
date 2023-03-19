import Box from '@mui/material/Box'
import 'components/BlogCard/BlogCard.scss'

type Props = {
    title: string
    section: string
    img: string
}
const BlogCard = ({ title, section, img }: Props) => {
    const setColor = (section: string) => {
        switch (section) {
            case 'Food':
                console.log('Food')
                return 'tag-blue'
            case 'Training':
                return 'tag-purple'
            case 'Partner training':
                return 'tag-pink'
        }
    }

    return (
        <Box className="card-container">
            <img src={img} alt="img-blog"></img>
            <Box className="blog-card-text">
                <Box className={`${setColor(section)} blog-card-section`}>
                    {section}
                </Box>
                <Box className="blog-card-title">{title}</Box>
            </Box>
        </Box>
    )
}
export default BlogCard
