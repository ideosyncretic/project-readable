import React from 'react'
import { Box, ButtonTransparent } from 'rebass'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import styled from 'styled-components'

const Votes = ({ voteScore, direction }) => (
  <Box>
    <VoteButton>
      <FaArrowUp />
    </VoteButton>
    {voteScore} {voteScore === 1 ? 'vote' : 'votes'}
    <VoteButton>
      <FaArrowDown />
    </VoteButton>
  </Box>
)

export default Votes

const VoteButton = styled(ButtonTransparent)`
  :hover {
    box-shadow: none;
  }
  a {
    color: inherit;
  }
`
