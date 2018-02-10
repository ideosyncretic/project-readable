import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { BACKGROUND_MEDIUM } from '../styles/constants'

const Page = ({ children }) => (
  <StyledPage direction="column" p={4}>
    {children}
  </StyledPage>
)

const StyledPage = styled(Flex)`
  background: ${BACKGROUND_MEDIUM};
`

export default Page
