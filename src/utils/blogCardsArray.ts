import card1 from 'assets/cards-menu/card-menu-2.jpg'
import card2 from 'assets/cards-menu/card-menu-3.jpg'
import card4 from 'assets/cards-menu/card-menu-5.jpeg'
import card5 from 'assets/cards-menu/card-menu-6.jpeg'
import card6 from 'assets/cards-menu/card-menu-7.jpeg'
import card7 from 'assets/cards-menu/card-menu-8.jpeg'
import card8 from 'assets/cards-menu/card-menu-9.jpeg'
import card9 from 'assets/cards-menu/card-menu-10.jpeg'
import card10 from 'assets/cards-menu/card-menu-11.jpeg'

export type BlogCard = {
    id: number
    title: string
    section: string
    desc: string
    img: string
}

const blogCardsArray: BlogCard[] = [
    {
        id: 1,
        title: 'Best protein shake',
        section: 'Food',
        desc: 'This is desc 14 pro',
        img: card8,
    },
    {
        id: 2,
        title: 'Ultimate cardio training',
        section: 'Training',
        desc: 'Desc 12',
        img: card10,
    },
    {
        id: 3,
        title: 'Tips to find a good training partner',
        section: 'Partner training',
        desc: 'This is desc 11 pro',
        img: card9,
    },
    {
        id: 4,
        title: 'Best time for running',
        section: 'Partner training',
        desc: 'This is desc 11 pro max',
        img: card7,
    },
    {
        id: 5,
        title: 'New juices in our shop',
        section: 'Food',
        desc: 'This is desc 14 pro Max',
        img: card6,
    },
    {
        id: 6,
        title: 'Short full body training',
        section: 'Training',
        desc: 'This is desc 13 pro',
        img: card5,
    },
    {
        id: 7,
        title: '20 best healthy recipes',
        section: 'Food',
        desc: 'This is desc 14 pro Max',
        img: card4,
    },
    {
        id: 8,
        title: 'Weight gain workout',
        section: 'Training',
        desc: 'This is desc 13 pro',
        img: card1,
    },
    {
        id: 9,
        title: 'Group trainings opportunity',
        section: 'Partner training',
        desc: 'This is desc 11 pro max',
        img: card2,
    },
]

export const getCardsObject = (array: BlogCard[]) =>
    array.reduce(
        (object, card) => ({
            ...object,
            [card.id]: card,
        }),
        {}
    )

export default blogCardsArray
