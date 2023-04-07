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
    author: string
    desc: string
    img: string
}

const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac diam luctus, semper lacus in, maximus orci. Phasellus efficitur elementum mi, in auctor orci pretium nec. Sed quis vulputate ipsum. Curabitur sed libero nec velit elementum euismod. Aliquam dapibus accumsan nisl quis pretium.\n\n Quisque imperdiet id lacus ut sollicitudin. In congue felis eu diam dapibus sodales. Maecenas maximus, ante eu pellentesque fringilla, ipsum eros vehicula purus, eget hendrerit eros neque nec est. Quisque at suscipit urna. Etiam nibh enim, fermentum et auctor id, maximus at ante. Pellentesque neque nisl, faucibus ut odio id, convallis tempus felis. Sed vel risus sem. Vivamus tempor nec leo nec tristique. Suspendisse auctor enim mi. Donec pharetra leo scelerisque, tempus lorem quis, scelerisque lacus. Cras et ante in tortor efficitur consectetur. Ut rhoncus dui et nisi egestas posuere. Morbi ac pharetra felis. Suspendisse malesuada consectetur dolor a auctor. Fusce vel gravida lorem. Vestibulum eu diam nunc. \n\n Cras lacinia tortor est, vitae tempus lectus ornare quis. Donec ac auctor enim, in scelerisque dolor. Donec malesuada mauris gravida nibh luctus, in aliquet orci ultrices. Proin vehicula tristique posuere. Vivamus ullamcorper fringilla ultrices. Ut eu scelerisque elit. In scelerisque finibus diam, at commodo lorem sodales nec. Curabitur tempus malesuada dapibus. Integer id ligula libero. .'

const blogCardsArray: BlogCard[] = [
    {
        id: 1,
        title: 'Best protein shake',
        section: 'Food',
        author: 'Teddy Barns',
        desc: description,
        img: card8,
    },
    {
        id: 2,
        title: 'Ultimate cardio training',
        section: 'Training',
        author: 'Teddy Barns',
        desc: description,
        img: card10,
    },
    {
        id: 3,
        title: 'Tips to find a good training partner',
        section: 'Partner training',
        author: 'Teddy Barns',
        desc: description,
        img: card9,
    },
    {
        id: 4,
        title: 'Best time for running',
        section: 'Partner training',
        author: 'Teddy Barns',
        desc: description,
        img: card7,
    },
    {
        id: 5,
        title: 'New juices in our shop',
        section: 'Food',
        author: 'Teddy Barns',
        desc: description,
        img: card6,
    },
    {
        id: 6,
        title: 'Short full body training',
        section: 'Training',
        author: 'Teddy Barns',
        desc: description,
        img: card5,
    },
    {
        id: 7,
        title: '20 best healthy recipes',
        section: 'Food',
        author: 'Teddy Barns',
        desc: description,
        img: card4,
    },
    {
        id: 8,
        title: 'Weight gain workout',
        section: 'Training',
        author: 'Teddy Barns',
        desc: description,
        img: card1,
    },
    {
        id: 9,
        title: 'Group trainings opportunity',
        section: 'Partner training',
        author: 'Teddy Barns',
        desc: description,
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
