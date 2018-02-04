import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { bindActionCreators } from "redux"
import { getCategoriesRequest } from "../actions"

class Categories extends Component {
	componentDidMount() {
		this.props.getCategoriesRequest()
	}

	render() {
		const { categories } = this.props
		return (
			<div className="Categories">
				<ul>
					<li key="All">
						<Link to="/">All</Link>
					</li>
					{categories.map(category => (
						<li key={category.name}>
							<Link to={`/${category.path}`}>{category.name}</Link>
						</li>
					))}
				</ul>
			</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
