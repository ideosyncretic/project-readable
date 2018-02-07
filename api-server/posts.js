const clone = require('clone')

let db = {}

const defaultData = {
	'8xf0y6ziyjabvozdd253nd': {
		id: '8xf0y6ziyjabvozdd253nd',
		timestamp: 1467166872634,
		title:
			'Today, flat earth deniers get to watch live feed of a billionaires car floating around a sphere thing we have named Earth.',
		body:
			"I believe that the last flat earther to tell Elon to ’Prove It’ is currently floating in orbit in a cherry red tesla roadster, duct taped to the steering wheel. To my knowledge no astronauts walked on the moon during it's night time. A 'day' on the moon last a month (well, 29.5 days), and it wouldn't be a good plan to deliberately land in a location in the dark if you want to be effective in exploring and so on.",
		author: '-Dann01-',
		category: 'space',
		voteScore: 6,
		deleted: false,
		commentCount: 2
	},
	'6ni6ok3ym7mf1p33lnez': {
		id: '6ni6ok3ym7mf1p33lnez',
		timestamp: 1515686400000,
		title:
			"Do Australians have to say checkmate mate so that the other player doesn't think they're saying check mate?",
		body:
			"Check = king is threatened but can escape. Checkmate = king is currently threatened and no move can be made to escape, or no move can be made such that the king will not be immediately be threatened (if the king moves, it'll be into the path of another piece, or if you move any other piece, it'll immediately open up a path for the enemy)",
		author: 'HowHasNoOneNoticed',
		category: 'showerthoughts',
		voteScore: -5,
		deleted: false,
		commentCount: 0
	},
	'6ni6ok3ym7mf1exrkjelp33lnez': {
		id: '6ni6oesrcek3ym7mf1p33lnez',
		timestamp: 1502467200000,
		title:
			'TIL of an Idahoan student who made a science project about the dangers of dihydrogen monoxide (water).',
		body:
			' The project was so convincing it caused his fellow students to call for it to be banned. This was used as an argument against leading the public to false conclusions with the manipulation of facts.',
		author: 'biranouk',
		category: 'TIL',
		voteScore: -5,
		deleted: false,
		commentCount: 0
	}
}

function getData(token) {
	let data = db[token]
	if (data == null) {
		data = db[token] = clone(defaultData)
	}
	return data
}

function getByCategory(token, category) {
	return new Promise(res => {
		let posts = getData(token)
		let keys = Object.keys(posts)
		let filtered_keys = keys.filter(
			key => posts[key].category === category && !posts[key].deleted
		)
		res(filtered_keys.map(key => posts[key]))
	})
}

function get(token, id) {
	return new Promise(res => {
		const posts = getData(token)
		res(posts[id].deleted ? {} : posts[id])
	})
}

function getAll(token) {
	return new Promise(res => {
		const posts = getData(token)
		let keys = Object.keys(posts)
		let filtered_keys = keys.filter(key => !posts[key].deleted)
		res(filtered_keys.map(key => posts[key]))
	})
}

function add(token, post) {
	return new Promise(res => {
		let posts = getData(token)

		posts[post.id] = {
			id: post.id,
			timestamp: post.timestamp,
			title: post.title,
			body: post.body,
			author: post.author,
			category: post.category,
			voteScore: 1,
			deleted: false,
			commentCount: 0
		}

		res(posts[post.id])
	})
}

function vote(token, id, option) {
	return new Promise(res => {
		let posts = getData(token)
		post = posts[id]
		switch (option) {
			case 'upVote':
				post.voteScore = post.voteScore + 1
				break
			case 'downVote':
				post.voteScore = post.voteScore - 1
				break
			default:
				console.log(`posts.vote received incorrect parameter: ${option}`)
		}
		res(post)
	})
}

function disable(token, id) {
	return new Promise(res => {
		let posts = getData(token)
		posts[id].deleted = true
		res(posts[id])
	})
}

function edit(token, id, post) {
	return new Promise(res => {
		let posts = getData(token)
		for (prop in post) {
			posts[id][prop] = post[prop]
		}
		res(posts[id])
	})
}

function incrementCommentCounter(token, id, count) {
	const data = getData(token)
	if (data[id]) {
		data[id].commentCount += count
	}
}

module.exports = {
	get,
	getAll,
	getByCategory,
	add,
	vote,
	disable,
	edit,
	getAll,
	incrementCommentCounter
}
