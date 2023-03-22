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
        activeFilter?.includes(cat) ? removeFilter(cat) : setActiveFilter([cat])
    }

    const removeFilter = (cat: string) => {
        const index = activeFilter.findIndex(
            (category: string) => category === cat
        )
        activeFilter.splice(index, 1)
        setActiveFilter([])
    }

    return (
        <Box className="filters-container wrapper">
            <Typography variant="h4" component="h4">
                Choose category:
            </Typography>
            <Box className="filter-categories">
                {filtersArray.map((cat) => {
                    return (
                        <div
                            className={
                                activeFilter.includes(cat)
                                    ? 'category active'
                                    : 'category'
                            }
                            onClick={() => filterActive(cat)}
                            style={{ userSelect: 'none' }}
                        >
                            {cat}
                        </div>
                    )
                })}
            </Box>
        </Box>
    )
}
export default Filters
