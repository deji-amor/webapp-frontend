import React from 'react'
import PropTypes from 'prop-types'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { styled } from '@mui/material'

const FilterButton = props => {
  const Filter = styled("div")`
  color: #2B2E72;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

  return (
    <Filter>
      <span className="">Filters</span>
      <span onClick={() => {}} className=''><FilterListOutlinedIcon style={{fontSize: 20}} className='text-[#2B2E72] cursor-pointer'/></span>
    </Filter>
  )
}

FilterButton.propTypes = {}

export default FilterButton