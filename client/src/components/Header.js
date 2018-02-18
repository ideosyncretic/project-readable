import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { Button } from 'rebass'
import {
  BACKGROUND,
  ACCENT,
  ACCENT_DARK,
  TEXT_LIGHT_MUTED
} from '../styles/constants.js'

const Header = () => {
  return (
    <HeaderContainer justify="space-between" align="center" w={1} px={4}>
      <Box>
        <Link to="/">
          <h1>Readable</h1>
        </Link>
      </Box>
      <Link to="/post/add">
        <Button children="Add post" />
      </Link>
    </HeaderContainer>
  )
}

const HeaderContainer = styled(Flex)`
  background: ${BACKGROUND};
  box-sizing: border-box;
  a {
    color: ${TEXT_LIGHT_MUTED};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  button {
    background: ${ACCENT};
    color: ${BACKGROUND};
    :active {
      background: ${ACCENT_DARK};
    }
  }
`

export default Header
