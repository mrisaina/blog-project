import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'

type Props = {
    isShown: any
    openDatePicker: any
}
const DatePickerComponent = ({ isShown, openDatePicker }: Props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                disablePast
                defaultValue={dayjs()}
                open={isShown}
                sx={{
                    display: 'block',
                    position: 'absolute',
                    zIndex: '-10',
                    top: '0',
                }}
                slotProps={{
                    actionBar: {
                        actions: ['accept'],
                    },
                }}
                closeOnSelect={false}
                onClose={openDatePicker}
            />
        </LocalizationProvider>
    )
}
export default DatePickerComponent
