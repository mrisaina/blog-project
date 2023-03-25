import MainImage from 'components/MainImage/MainImage'
import background from 'assets/main-image/favourites-image.jpeg'

type Props = {}
const Favourites = (props: Props) => {
    return (
        <>
            <MainImage title="Favourites" img={background} />
        </>
    )
}
export default Favourites
