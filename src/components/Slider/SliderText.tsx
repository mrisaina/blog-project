import { Box, CardActions } from '@mui/material'
import Button from '@mui/material/Button'
import 'components/Slider/Slider.scss'

type Props = {}
const SliderText = (props: Props) => {
    return (
        <Box component="div" className="slider-info-container">
            <Box component="p" className="text-red">
                Certified fitness professional
            </Box>
            <Box component="p" className="text-title">
                Take control of your health
            </Box>
            <Box component="p" className="text-description">
                Curabitur non nulla sit amet nisl tempus convallis <br />
                quis ac lectus dolor sit amet.
            </Box>
            <CardActions>
                <Button
                    sx={{
                        my: 2,
                        px: 3,
                        mr: 4,
                        color: 'white',
                        textTransform: 'none',
                        display: 'block',
                        backgroundColor: '#4154FF',
                        borderRadius: '40px',
                        width: '180px',
                        fontSize: '18px',

                        '&:hover': {
                            backgroundColor: '#0019f7',
                        },
                    }}
                >
                    Watch Video
                </Button>
                <Button
                    sx={{
                        my: 2,
                        px: 3,
                        color: 'white',
                        textTransform: 'none',
                        display: 'block',
                        backgroundColor: '#4154FF',
                        borderRadius: '40px',
                        width: '180px',
                        fontSize: '18px',

                        '&:hover': {
                            backgroundColor: '#0019f7',
                        },
                    }}
                >
                    Open Blog
                </Button>
            </CardActions>
        </Box>
    )
}
export default SliderText
