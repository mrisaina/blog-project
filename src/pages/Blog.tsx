import MainImage from 'components/MainImage'
import background from 'assets/join-img.jpeg'
import Box from '@mui/material/Box'
import BlogCard from 'components/BlogCard/BlogCard'
import card1 from 'assets/cards-menu/card-menu-2.jpg'
import 'components/BlogCard/BlogCard.scss'
import 'components/Slider/Slider.scss'

type Props = {}
const Blog = (props: Props) => {
    return (
        <>
            <MainImage
                title="Blog"
                description="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus."
                img={background}
            />
            <Box className="blog-cards-list wrapper">
                <BlogCard
                    title="Best protein shake"
                    section="Food"
                    img={card1}
                ></BlogCard>
                <BlogCard
                    title="Ultimate cardio training"
                    section="Training"
                    img={card1}
                ></BlogCard>
                <BlogCard
                    title="Tips to find a good training partner"
                    section="Partner training"
                    img={card1}
                ></BlogCard>
            </Box>
        </>
    )
}
export default Blog
