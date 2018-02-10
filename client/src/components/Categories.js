import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getCategoriesRequest } from '../actions'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { ButtonOutline } from 'rebass'
import {
  ACCENT,
  PRIMARY,
  BACKGROUND_DARK,
  TEXT_LIGHT,
  TEXT_LIGHT_MUTED
} from '../styles/constants.js'

class Categories extends Component {
  componentDidMount() {
    this.props.getCategoriesRequest()
  }

  render() {
    const { categories } = this.props
    return (
      <CategoriesPanel>
        <ul>
          <Category key="all-categories">
            <NavLink activeClassName="active" to="/">
              All
            </NavLink>
          </Category>
          {categories.map(category => (
            <Category key={category.name}>
              <NavLink activeClassName="active" to={`/${category.path}`}>
                {category.name}
              </NavLink>
            </Category>
          ))}
        </ul>
      </CategoriesPanel>
    )
  }
}

const mapDispatchToProps = dispatch => {
  // bind action creators
  return bindActionCreators({ getCategoriesRequest }, dispatch)
}

const mapStateToProps = ({ categories }) => {
  const categoriesArr = Object.keys(categories).map(key => categories[key])
  return {
    categories: categoriesArr
  }
}

const CategoriesPanel = styled(Flex)`
  background: ${BACKGROUND_DARK};
  align-items: center;
  ul {
    list-style-type: none;
    margin: 0 1rem;
    padding: 0;
    display: inline-block;
    overflow: auto;
  }
`

const Category = styled.li`
  color: ${TEXT_LIGHT};
  border-color: ${PRIMARY};
  text-decoration: none;
  text-align: center;
  float: left;
  margin: 1rem;
  a {
    color: ${TEXT_LIGHT_MUTED};
    text-decoration: none;
    &.active {
      color: ${ACCENT};
    }
    &:hover {
      color: ${ACCENT};
    }
  }
`

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
