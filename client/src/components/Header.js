import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

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
  background: #463cc4;
  box-sizing: border-box;
  color: white;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default Header
