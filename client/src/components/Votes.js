import React from 'react'
import { Box } from 'rebass'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import styled from 'styled-components'

const Votes = ({ voteScore, direction }) => (
  <Box>
    <VoteButton onClick={() => console.log('Voted up! Yay!')}>
      <FaArrowUp />
    </VoteButton>
    {voteScore} {voteScore === 1 ? 'vote' : 'votes'}
    <VoteButton onClick={() => console.log('Voted down! Boo!')}>
      <FaArrowDown />
    </VoteButton>
  </Box>
)

export default Votes

const VoteButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  :hover {
    box-shadow: none;
  }
  a {
    color: inherit;
  }
`
