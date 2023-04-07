import { Box, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import '../TrainingsList/TrainingsList.scss'

type Props = {
    dateList: Array<string>
    removeDate: (date: string) => void
}
const TrainingsList = ({ dateList, removeDate }: Props) => {
    return (
        <Box className="trainings-list">
            {dateList.length ? (
                dateList.map((date) => {
                    return (
                        <Box
                            className="training wrapper"
                            key={dateList.indexOf(date)}
                        >
                            <div className="training-info">
                                <div className="date-title">
                                    Planned training{' '}
                                    {dateList.indexOf(date) + 1}:
                                </div>
                                <div className="date">{date}</div>
                            </div>
                            <Button
                                variant="text"
                                sx={{ color: 'unset' }}
                                onClick={() => removeDate(date)}
                            >
                                <DeleteIcon
                                    sx={{
                                        width: '35px',
                                        height: '35px',
                                    }}
                                />
                            </Button>
                        </Box>
                    )
                })
            ) : (
                <Box className="empty-page wrapper">
                    <p className="empty-page-text">Page is empty</p>
                </Box>
            )}
        </Box>
    )
}
export default TrainingsList
