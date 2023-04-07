import { Button } from '@mui/material'
import Box from '@mui/system/Box'
// import { SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    title: string
    description: string
    img: string
    filter: string
    setActiveFilter: any
}
const CardItem = ({
    title,
    description,
    img,
    filter,
    setActiveFilter,
}: Props) => {
    const navigate = useNavigate()

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
            onClick={() => {
                setActiveFilter(filter)
                navigate('/blog')
            }}
        >
            <Box className="card-text-container">
                <Box component="span" className="title">
                    {title}
                </Box>
                <Box component="span" className="description">
                    {description}
                </Box>
                <Box
                    component="div"
                    className="arrow-img"
                    // onClick={() => {
                    //     navigate('/blog')
                    // }}
                ></Box>
            </Box>
        </Button>
    )
}
export default CardItem
