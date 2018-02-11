import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import {
  ACCENT,
  PRIMARY,
  BACKGROUND_DARK,
  TEXT_LIGHT,
  TEXT_LIGHT_MUTED
} from '../../../styles/constants.js'

const Categories = props => {
  const { categories } = props
  return (
    <CategoriesPanel>
      <ul>
        <li key="all">
          <NavLink exact activeClassName="selected" to="/">
            All
          </NavLink>
        </li>
        {categories.map(category => (
          <li key={category.name}>
            <NavLink exact activeClassName="selected" to={`/${category.path}`}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </CategoriesPanel>
  )
}

const CategoriesPanel = styled(Flex)`
  align-items: center;
  ul {
    list-style-type: none;
    margin: 0 1rem;
    padding: 0;
    display: inline-block;
    overflow: auto;
    li {
      color: ${TEXT_LIGHT};
      border-color: ${PRIMARY};
      text-decoration: none;
      text-align: center;
      float: left;
      margin: 1rem;
      a {
        color: ${TEXT_LIGHT_MUTED};
        text-decoration: none;
        &.selected {
          color: ${ACCENT};
        }
        &:hover {
          color: ${ACCENT};
        }
      }
    }
  }
`

export default Categories
