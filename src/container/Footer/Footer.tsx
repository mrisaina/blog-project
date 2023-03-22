import { Box, CardActions, Typography } from '@mui/material'
import Logo from 'components/Logo/Logo'
import 'container/Footer/Footer.scss'

type Props = {}
const Footer = (props: Props) => {
    return (
        <Box className="footer-container">
            <Box className="footer-logo-container">
                <Box className="footer-logo">
                    <Logo />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
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
                </Box>
                <Box component="p" className="footer-logo-text">
                    Ac aliquam neque sagittis diam faucibus vitae purus turpis
                    phasellus. Pellentesque consectetur amet purus ultrices
                    mauris.
                </Box>
                <CardActions className="social-media-container">
                    <button className="fb-btn"></button>
                    <button className="google-btn"></button>
                    <button className="inst-btn"></button>
                    <button className="pinterest-btn"></button>
                    <button className="twitter-btn"></button>
                    <button className="youtube-btn"></button>
                </CardActions>
            </Box>
            <Box className="footer-contact-container">
                <Box className="footer-contact-info-container">
                    <Box className="footer-contact-info-title">
                        Contact Information
                    </Box>
                    <Box className="footer-contact-info-address">
                        4746 Tipple Road Michigan 48449
                    </Box>
                    <Box className="footer-contact-info-mobile">
                        Mobile : 1.800.000.0000
                    </Box>
                    <Box className="footer-contact-info-email">
                        Email : info@your-company.com
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Footer
