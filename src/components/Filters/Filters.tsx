import { Box, Typography } from '@mui/material'
import 'components/Slider/Slider.scss'
import 'components/Filters/Filters.scss'
import { filtersArray } from 'utils/filtersArray'

type Props = {
    activeFilter: Array<string>
    setActiveFilter: any
}
const Filters = ({ activeFilter, setActiveFilter }: Props) => {
    const filterActive = (cat: string) => {
        activeFilter?.includes(cat)
            ? setActiveFilter([''])
            : setActiveFilter([cat])
    }

    return (
        <Box className="filters-container wrapper">
            <Typography variant="h4" component="h4">
                Choose category:
            </Typography>
            <Box className="filter-categories">
                {filtersArray.map(({ id, category }) => {
                    return (
                        <div
                            key={id}
                            className={
                                activeFilter.includes(category)
                                    ? 'category active'
                                    : 'category'
                            }
                            onClick={() => filterActive(category)}
                            style={{ userSelect: 'none' }}
                        >
                            {category}
                        </div>
                    )
                })}
            </Box>
        </Box>
    )
}
export default Filters
