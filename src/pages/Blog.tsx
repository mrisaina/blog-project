import MainImage from 'components/MainImage/MainImage'
import background from 'assets/main-image/join-img.jpeg'
import Box from '@mui/material/Box'
import BlogCard from 'components/BlogCard/BlogCard'
import 'components/BlogCard/BlogCard.scss'
import 'components/Slider/Slider.scss'
import blogCardsArray from 'utils/blogCardsArray'
import Filters from 'components/Filters/Filters'
import { FavouritesList } from 'container/App/App'
import { useEffect } from 'react'

type Props = {
    addToFavourites: (id: number) => void
    favouritesList: FavouritesList
    activeFilter: Array<string>
    setActiveFilter: React.Dispatch<React.SetStateAction<string[]>>
}

const Blog = ({
    addToFavourites,
    favouritesList,
    activeFilter,
    setActiveFilter,
}: Props) => {
    useEffect(() => {
        activeFilter.length
            ? document
                  .getElementById('main-blog')
                  ?.scrollIntoView({ behavior: 'smooth' })
            : window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [activeFilter])

    return (
        <>
            <MainImage
                title="Blog"
                description="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus."
                img={background}
            />
            <div id="main-blog">
                {' '}
                <Filters
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
                <Box className="blog-cards-list wrapper">
                    {String(activeFilter)
                        ? blogCardsArray
                              .filter(
                                  ({ section }) =>
                                      String(activeFilter) === section
                              )
                              .map(({ id, title, section, img }) => {
                                  return (
                                      <div key={id}>
                                          <BlogCard
                                              id={id}
                                              title={title}
                                              section={section}
                                              img={img}
                                              addToFavourites={addToFavourites}
                                              favouritesList={favouritesList}
                                          ></BlogCard>
                                      </div>
                                  )
                              })
                        : blogCardsArray.map(({ id, title, section, img }) => {
                              return (
                                  <div key={id}>
                                      <BlogCard
                                          id={id}
                                          title={title}
                                          section={section}
                                          img={img}
                                          addToFavourites={addToFavourites}
                                          favouritesList={favouritesList}
                                      ></BlogCard>
                                  </div>
                              )
                          })}
                </Box>
            </div>
        </>
    )
}
export default Blog
