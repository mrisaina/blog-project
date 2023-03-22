import Typography from '@mui/material/Typography'
import logo from 'assets/logo.png'

const Logo = () => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
        >
            <img src={logo} alt="" />
        </Typography>
    )
}

export default Logo
