import Typography from '@mui/material/Typography'

type Props = {}
const Blog = (props: Props) => {
    return (
        <>
            <Typography
                component="h3"
                variant="h3"
                sx={{
                    width: '1000px',
                    color: '#fff',
                    fontWeight: '700',
                    margin: '100px auto 80px auto',
                    textAlign: 'center',
                    letterSpacing: '-.06em',
                }}
            >
                "How you respond to the challenge in the second half will
                determine what you become after the game, whether you are a
                winner or a loser."
            </Typography>
        </>
    )
}
export default Blog
