import MainImage from 'components/MainImage/MainImage'
import background from 'assets/main-image/trainings-image.jpeg'
import 'components/BlogCard/BlogCard.scss'
import TrainingsList from 'components/TrainingsList/TrainingsList'

type Props = {
    dateList: Array<string>
    removeDate: (date: string) => void
}
const Trainings = ({ dateList, removeDate }: Props) => {
    return (
        <>
            <MainImage title="Planned Trainings" img={background} />
            <TrainingsList dateList={dateList} removeDate={removeDate} />
        </>
    )
}
export default Trainings
