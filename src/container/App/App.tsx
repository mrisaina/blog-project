import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from 'container/Footer/Footer'
import Home from 'pages/Home'
import { Route, Routes } from 'react-router-dom'
import Blog from 'pages/Blog'
import Videos from 'pages/Videos'

type Props = {}
function App(props: Props) {
    return (
        <div className="App">
            <CssBaseline />
            <Header />
            {/* <Home /> */}
            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/videos" element={<Videos />}></Route>
                    <Route path="/favourites"></Route>
                </Routes>
            </div>
            <Footer />
        </div>
    )
}
export default App
