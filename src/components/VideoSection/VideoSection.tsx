import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import videoImage from 'assets/video-preview.jpeg'
import 'components/VideoSection/VideoList.scss'
import { useNavigate } from 'react-router-dom'
import YoutubeEmbed from './YoutubeEmbed'

type Props = {}
const VideoSection = (props: Props) => {
    const navigate = useNavigate()

    return (
        <Box className="video-list-container">
            <Box className="video-desc-container">
                <img
                    src={videoImage}
                    alt="video-img"
                    className="img-main-video"
                />
                <Box className="video-list-desc">
                    <Typography component="h2" className="blue-subtitle">
                        Tune up your workouts
                    </Typography>
                    <Typography component="h2" className="main-title">
                        The best health & fitness advice online
                    </Typography>
                    <Typography component="p" className="desc">
                        Arcu eu facilisi ut quisque placerat nunc habitant.
                        Magna semper mauris, <br /> venenatis, leo integer sit
                        pellentesque.
                    </Typography>
                    <Button
                        sx={{
                            my: 2,
                            px: 3,
                            mt: 7,
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
                        onClick={() => {
                            navigate('/videos')
                        }}
                    >
                        Watch Video
                    </Button>
                </Box>
            </Box>
            <Box className="video-list">
                <Box className="video-list-title">Latest videos</Box>
                <Box className="videos-list">
                    <YoutubeEmbed embedId="IT94xC35u6k" />
                    <YoutubeEmbed embedId="RKYhcPV2dbA" />
                    <YoutubeEmbed embedId="gBFvVIkPmww" />
                </Box>
            </Box>
        </Box>
    )
}
export default VideoSection
