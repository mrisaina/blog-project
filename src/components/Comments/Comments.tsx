import {
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState } from 'react'
import '../Comments/Comments.scss'

type Props = {}
type Review = {
    name: string
    text: string
}
const Comments = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Kate',
            text: 'Thank you for a great course. Great presentation style with lots of opportunities to ask questions and talk about real life examples which all made for a really enjoyable and informative course',
        },
        {
            name: 'Dave',
            text: "A wonderfully practical course - both personally and professionally. I will take away lots of things that I can quickly and easily apply. I can't wait to get back to work and try some of these things out.",
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({ name: '', text: '' })
    const [isValid, setIsValid] = useState<boolean>(true)

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const addNewReview = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (newReview.name !== '' && newReview.text !== '') {
            setIsValid(true)
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        } else {
            setIsValid(false)
        }
    }

    return (
        <Box
            className="comments-section"
            sx={{
                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': {
                    width: '0.4em',
                },
                '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#888',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                },
            }}
        >
            <Typography
                component="h2"
                variant="h4"
                sx={{
                    textAlign: 'center',
                    color: '#fff',
                    backgroundColor: '#ff418a',
                    padding: '5px',
                    border: '1px solid #000',
                }}
            >
                Leave your comment
            </Typography>
            {reviews.map(({ name, text }, id) => {
                return (
                    <Card sx={{ margin: '30px 0', padding: '0 20px' }} key={id}>
                        <CardContent>
                            <div>{name}: </div>
                            <div>{text}</div>
                        </CardContent>
                    </Card>
                )
            })}

            <form style={{ marginLeft: '80px' }} onSubmit={addNewReview}>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                        sx={{ width: '60%' }}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        placeholder="Your message"
                        minRows={5}
                        value={newReview.text}
                        onChange={handleText}
                        style={{ width: '80%' }}
                    />
                </div>
                <p
                    style={{
                        display: `${isValid ? 'none' : 'block'}`,
                        position: 'absolute',
                        width: '100%',
                        color: '#FF414B',
                        fontSize: '14px',
                        margin: '0',
                    }}
                >
                    Please, enter valid data
                </p>
                <Button
                    type="submit"
                    variant="outlined"
                    sx={{ marginTop: '25px' }}
                >
                    Send
                </Button>
            </form>
        </Box>
    )
}
export default Comments
