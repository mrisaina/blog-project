import { Button, Input, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import 'components/JoinForm/JoinForm.scss'
import { useRef, useState } from 'react'

type Props = {}
const JoinForm = (props: Props) => {
    const [isShown, setIsShown] = useState<boolean>(false)
    const [isValidEmail, setIsValid] = useState<boolean>(true)
    const [emailValue, setEmail] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)

    const openModal = () => {
        setIsShown(!isShown)
    }

    const checkIsValidEmail = (email: string) => {
        const res = /\S+@\S+\.\S+/.test(email)
        setIsValid(res)
        res && openModal()
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onSubmit = () => {
        ref.current!.value = ''
        setEmail('')
    }

    return (
        <Box className="join-form-container">
            <Box className="join-form-subtitle">
                Join our mailing list today
            </Box>
            <Box className="join-form-title">
                Insider offers & flash sales in your <br /> inbox every week.
            </Box>
            <form action="post" className="join-form">
                <Input
                    className="email-input"
                    placeholder="Enter your email"
                    type="email"
                    inputRef={ref}
                    onChange={handleChangeEmail}
                    disableUnderline
                ></Input>
                <Button
                    sx={{
                        px: 3,
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
                        checkIsValidEmail(emailValue)
                        onSubmit()
                    }}
                >
                    Subscribe
                </Button>
                <Modal open={isShown} onClose={openModal} disableScrollLock>
                    <Box className="modal-container">
                        <Typography
                            id="modal-modal-title"
                            variant="h4"
                            component="h2"
                            className="modal-title"
                        >
                            Your request successfully sent!
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            className="modal-text"
                        >
                            Wait for the confirmation message in your email. If
                            any problems occur, contact us to our support email:
                            info@your-company.com
                        </Typography>

                        <Button
                            sx={{
                                px: 3,
                                color: 'white',
                                textTransform: 'none',
                                backgroundColor: '#4154FF',
                                borderRadius: '40px',

                                '&:hover': {
                                    backgroundColor: '#0019f7',
                                },
                            }}
                            className="btn-submit"
                            onClick={() => {
                                openModal()
                            }}
                        >
                            Got it
                        </Button>
                    </Box>
                </Modal>
            </form>
            <Typography
                component="h6"
                variant="h6"
                sx={{
                    color: '#FF414B',
                    display: `${isValidEmail ? 'none' : 'block'}`,
                    position: 'absolute',
                    paddingTop: '10px',
                }}
            >
                Please, enter valid email
            </Typography>
            <Box component="p" className="join-form-paragraph">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus dolor sit amet, <br /> consectetur adipiscing elit sed
                porttitor lectus.
            </Box>
        </Box>
    )
}
export default JoinForm
