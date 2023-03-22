import { Box, Button } from '@mui/material'
import 'components/BlogCard/BlogCard.scss'
import { useNavigate } from 'react-router-dom'
import arrow from '../../assets/arrow-right-black.svg'

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

    const navigate = useNavigate()

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
                <Box className="arrow-img-container">
                    <Button
                        className="btn-read-more"
                        onClick={() => {
                            navigate('/blog/')
                        }}
                    >
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
