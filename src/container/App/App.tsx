import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Main from 'container/Main/Main'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
        </>
    )
}
export default App
