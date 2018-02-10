import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { PRIMARY, TEXT_LIGHT } from '../styles/constants.js'

const Header = () => {
  return (
    <HeaderContainer w={1} px={4}>
      <Link to="/">
        <h1>Readable</h1>
      </Link>
    </HeaderContainer>
  )
}

const HeaderContainer = styled(Flex)`
  background: ${PRIMARY};
  box-sizing: border-box;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default Header
