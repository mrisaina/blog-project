import { Button } from '@mui/material'
import Box from '@mui/system/Box'

type Props = {
    title: string
    description: string
    img: string
}
const CardItem = ({ title, description, img }: Props) => {
    return (
        <Button
            className="card"
            sx={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '400px',
                width: '400px',
                borderRadius: '5px 5px 40px 5px',
                boxShadow: '0px 0px 20px rgb(113, 112, 112)',

                '&:hover': {
                    height: '410px',
                    width: '410px',
                    boxShadow: '0px 0px 20px #fff',
                },
            }}
        >
            <Box component="div" className="card-text-container">
                <Box component="span" className="title">
                    {title}
                </Box>
                <Box component="span" className="description">
                    {description}
                </Box>
                <Box component="div" className="arrow-img"></Box>
            </Box>
        </Button>
    )
}
export default CardItem
