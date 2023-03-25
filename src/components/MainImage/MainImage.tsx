import { Box } from '@mui/system'
import 'components/MainImage/MainImage.scss'

type Props = {
    title: string
    description?: string
    img: string
}
const MainImage = ({ title, description, img }: Props) => {
    return (
        <Box
            className="main-image-section"
            sx={{
                backgroundImage: `linear-gradient(to right, #000 40%, transparent), url(${img})`,
            }}
        >
            <Box component="p" className="text-title">
                {title}
            </Box>
            <Box component="p" className="text-description">
                {description}
            </Box>
        </Box>
    )
}
export default MainImage
