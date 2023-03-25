import { Box, Button } from '@mui/material'
import 'components/BlogCard/BlogCard.scss'
import { useNavigate } from 'react-router-dom'
import arrow from '../../assets/arrow-right/arrow-right-black.svg'
import favsWhite from '../../assets/like/like-white.svg'
import favsRed from '../../assets/like/like-red.svg'
import { useState } from 'react'

type Props = {
    title: string
    section: string
    img: string
}
const BlogCard = ({ title, section, img }: Props) => {
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

    const [isSelected, setSelection] = useState<boolean>(false)

    const selectCard = () => setSelection(!isSelected)

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
                            onClick={selectCard}
                            src={isSelected ? favsRed : favsWhite}
                            alt="favs-icon"
                        />
                    </Box>
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
