import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Logo from '../../components/Logo/Logo'
import dayjs, { Dayjs } from 'dayjs'
import { useNavigate } from 'react-router-dom'
import DatePickerComponent from 'components/DatePicker/DatePicker'

const pages = ['Home', 'Blog', 'Videos', 'Favourites', 'Trainings']

function ResponsiveAppBar(
    addNewDate: (e: any) => void,
    setActiveFilter: React.Dispatch<React.SetStateAction<string[]>>
) {
    const [isShown, setIsShown] = useState<boolean>(false)

    const openDatePicker = () => {
        setIsShown(!isShown)
    }

    const [value, setValue] = useState<Dayjs>(dayjs())

    const changeValue = () => {
        setValue(value)
    }

    const navigate = useNavigate()

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: '#000000', pb: '5px' }}
            className="header-bar"
        >
            <Container>
                <Toolbar disableGutters>
                    <Logo />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            pt: 1,
                            display: 'flex',
                            fontFamily: 'Arial',
                            fontWeight: 700,
                            fontSize: '26px',
                            letterSpacing: '.1em',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FITNESS
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => {
                                    page === 'Home'
                                        ? navigate('/')
                                        : navigate(page.toLowerCase())
                                    page !== 'Blog' && setActiveFilter([])
                                }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, position: 'relative' }}>
                        <Button
                            sx={{
                                my: 2,
                                px: 3,
                                color: 'white',
                                textTransform: 'none',
                                display: 'block',
                                backgroundColor: '#4154FF',
                                borderRadius: '40px',
                                zIndex: '10',

                                '&:hover': {
                                    backgroundColor: '#0019f7',
                                },
                            }}
                            onClick={() => {
                                openDatePicker()
                                changeValue()
                            }}
                        >
                            Schedule a Workout
                        </Button>
                        <DatePickerComponent
                            isShown={isShown}
                            openDatePicker={openDatePicker}
                            addNewDate={addNewDate}
                        ></DatePickerComponent>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
type Props = {
    addNewDate: (e: any) => void
    setActiveFilter: React.Dispatch<React.SetStateAction<string[]>>
}
const Header = ({ addNewDate, setActiveFilter }: Props) => {
    return ResponsiveAppBar(addNewDate, setActiveFilter)
}

export default Header
