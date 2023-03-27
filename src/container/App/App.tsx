import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from 'container/Footer/Footer'
import Home from 'pages/Home'
import { Route, Routes } from 'react-router-dom'
import Blog from 'pages/Blog'
import Videos from 'pages/Videos'
import Favourites from 'pages/Favourites'
import { useState } from 'react'

type Props = {}

export type FavouritesList = Array<number>
const App = (props: Props) => {
    const [favouritesList, setToFavourites] = useState<FavouritesList>([])

    const addToFavourites = (id: number) => {
        if (favouritesList.includes(id)) {
            setToFavourites(favouritesList.filter((el) => el !== id))
        } else {
            setToFavourites([...favouritesList, id])
        }
    }

    console.log(favouritesList)

    return (
        <div className="App">
            <CssBaseline />
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/blog"
                        element={
                            <Blog
                                addToFavourites={addToFavourites}
                                favouritesList={favouritesList}
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
                </Routes>
            </div>
            <Footer />
        </div>
    )
}
export default App
