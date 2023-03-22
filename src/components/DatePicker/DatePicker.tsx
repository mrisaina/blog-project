import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

type Props = {
    isShown: any
    openDatePicker: any
}

export let time: any[] = []

const DatePickerComponent = ({ isShown, openDatePicker }: Props) => {
    const changeValue = (e: any) => {
        time.push(e.format('DD MMMM YYYY'))
    }

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
                    if (e) changeValue(e)
                    console.log(time)
                }}
                onClose={openDatePicker}
            />
        </LocalizationProvider>
    )
}
export default DatePickerComponent
