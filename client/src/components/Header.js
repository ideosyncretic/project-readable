import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { Button } from 'rebass'
import {
  BACKGROUND,
  ACCENT,
  TEXT_LIGHT,
  TEXT_LIGHT_MUTED,
  SECONDARY_ACCENT
} from '../styles/colors.js'

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
  background: linear-gradient(to bottom right, ${ACCENT}, ${SECONDARY_ACCENT});
  box-sizing: border-box;
  a {
    color: ${TEXT_LIGHT};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  button {
    background: ${TEXT_LIGHT};
    color: ${BACKGROUND};
    :active {
      background: ${TEXT_LIGHT_MUTED};
    }
  }
`

export default Header
