import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Logo from '../../components/Logo'
import DatePickerComponent from 'components/DatePicker'
import dayjs, { Dayjs } from 'dayjs'

const pages = ['Home', 'Blog', 'Videos', 'Favourite', 'Trainings']

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const [isShown, setIsShown] = useState<boolean>(false)

    const openDatePicker = () => {
        setIsShown(!isShown)
    }

    const [value, setValue] = useState<Dayjs>(dayjs())

    const changeValue = () => {
        setValue(value)
    }

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: '#000000' }}
            className="header-bar"
        >
            <Container maxWidth="xl">
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
                            display: { xs: 'none', md: 'flex' },
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
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Arial',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FITNESS
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: { md: 'center' },
                            gap: { md: '10px' },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
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
                        ></DatePickerComponent>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
type Props = {}
const Header = (props: Props) => {
    return ResponsiveAppBar()
}

export default Header
