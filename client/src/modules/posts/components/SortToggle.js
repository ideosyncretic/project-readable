import React from 'react'
import { Box } from 'rebass'

const SortToggle = ({ handleSort }) => {
  return (
    <Box>
      <button onClick={() => handleSort('SORT_BY_POPULARITY')}>Popular</button>
      <button onClick={() => handleSort('SORT_BY_LATEST')}>Latest</button>
    </Box>
  )
}

export default SortToggle
