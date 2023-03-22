import MainImage from 'components/MainImage/MainImage'
import background from 'assets/join-img.jpeg'
import Box from '@mui/material/Box'
import BlogCard from 'components/BlogCard/BlogCard'
import 'components/BlogCard/BlogCard.scss'
import 'components/Slider/Slider.scss'
import blogCardsArray from 'utils/blogCardsArray'
import Filters from 'components/Filters/Filters'
import { useState } from 'react'

type Props = {}
const Blog = (props: Props) => {
    const [activeFilter, setActiveFilter] = useState([''])

    return (
        <>
            <MainImage
                title="Blog"
                description="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus."
                img={background}
            />
            <Filters
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <Box className="blog-cards-list wrapper">
                {String(activeFilter)
                    ? blogCardsArray
                          .filter(
                              ({ section }) => String(activeFilter) === section
                          )
                          .map(({ id, title, section, img }) => {
                              return (
                                  <div key={id}>
                                      <BlogCard
                                          title={title}
                                          section={section}
                                          img={img}
                                      ></BlogCard>
                                  </div>
                              )
                          })
                    : blogCardsArray.map(({ id, title, section, img }) => {
                          return (
                              <div key={id}>
                                  <BlogCard
                                      title={title}
                                      section={section}
                                      img={img}
                                  ></BlogCard>
                              </div>
                          )
                      })}
            </Box>
        </>
    )
}
export default Blog
