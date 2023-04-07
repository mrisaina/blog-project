import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from 'container/Footer/Footer'
import Home from 'pages/Home'
import { Route, Routes } from 'react-router-dom'
import Blog from 'pages/Blog'
import Videos from 'pages/Videos'
import Favourites from 'pages/Favourites'
import { useState } from 'react'
import Trainings from 'pages/Trainings'
import dayjs from 'dayjs'
import blogCardsArray from 'utils/blogCardsArray'
import BlogCardDetails from 'pages/BlogCardDetails'

type Props = {}

export type FavouritesList = Array<number>
const App = (props: Props) => {
    const [favouritesList, setToFavourites] = useState<FavouritesList>([])
    const [activeFilter, setActiveFilter] = useState([''])

    const addToFavourites = (id: number) => {
        favouritesList.includes(id)
            ? setToFavourites(favouritesList.filter((el) => el !== id))
            : setToFavourites([...favouritesList, id])
    }

    const [dateList, setNewDate] = useState<Array<string>>([])

    const addNewDate = (e: any) => {
        const date = dayjs(e).format('DD MMM YYYY')
        setNewDate((prevState) => [...prevState, date])
    }

    const removeDate = (date: string) => {
        setNewDate((prevState) => {
            return prevState.filter((el) => el !== date)
        })
    }

    return (
        <div className="App">
            <CssBaseline />
            <Header addNewDate={addNewDate} setActiveFilter={setActiveFilter} />
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={<Home setActiveFilter={setActiveFilter} />}
                    ></Route>
                    <Route
                        path="/blog"
                        element={
                            <Blog
                                addToFavourites={addToFavourites}
                                favouritesList={favouritesList}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                            />
                        }
                    ></Route>
                    <Route path="/videos" element={<Videos />}></Route>
                    <Route
                        path="/favourites"
                        element={
                            <Favourites
                                favouritesList={favouritesList}
                                addToFavourites={addToFavourites}
                            />
                        }
                    ></Route>
                    <Route
                        path="/blog/:id"
                        element={<BlogCardDetails data={blogCardsArray} />}
                    ></Route>
                    <Route
                        path="/trainings"
                        element={
                            <Trainings
                                dateList={dateList}
                                removeDate={removeDate}
                            />
                        }
                    ></Route>
                </Routes>
            </div>
            <Footer />
        </div>
    )
}
export default App
