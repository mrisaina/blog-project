import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

type Props = {
    isShown: any
    openDatePicker: any
    addNewDate: (e: any) => void
}

export let time: any[] = []

const DatePickerComponent = ({
    isShown,
    openDatePicker,
    addNewDate,
}: Props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                disablePast
                open={isShown}
                sx={{
                    display: 'block',
                    position: 'absolute',
                    zIndex: '-10',
                    top: '0',
                }}
                slotProps={{
                    actionBar: {
                        actions: ['accept', 'clear'],
                    },
                }}
                closeOnSelect={false}
                onAccept={(e) => {
                    e && addNewDate(e)
                }}
                onClose={openDatePicker}
            />
        </LocalizationProvider>
    )
}
export default DatePickerComponent
