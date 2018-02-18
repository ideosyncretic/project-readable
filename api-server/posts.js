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
  '8xf0efefyjabvozdd253nd': {
    id: '8xf0efefyjabvozdd253nd',
    timestamp: 1467166872634,
    title:
      'WSU researchers build -300ºF alien ocean to test NASA outer space submarine',
    body:
      'To determine how a submarine might work on Titan, the largest of Saturn’s many moons and the second largest in the solar system. The space agency plans to launch a real submarine into Titan seas in the next 20 years.',
    author: 'mvea',
    category: 'space',
    voteScore: 3,
    deleted: false,
    commentCount: 0
  },
  '0efefyjabvozdd253nd': {
    id: '0efefyjabvozdd253nd',
    timestamp: 1467166870634,
    title: `Received $10k for my infant's college fund - how to invest.`,
    body: `I welcomed my first child into the world in December, and my Grandmother wrote us check for $10,000 for the baby's college fund.

Most posts regarding college savings suggest opening a 529. I am concerned, however, with what will happen to these funds if my child chooses not to go to college.

I considered opening a Roth IRA for the sole purpose of college savings but the contribution limits are prohibitive ($5,500/year).

After searching through posts and wiki pages, I have had a hard time finding information regarding investment of college funds when dealing with a lump sum. Feel free to link to another post if you find one. Otherwise, any information that would help me weigh out my options would be helpful.

Some other information about me: * In my late 20's * Live in Texas * Married - $90k income * Debt-free except house * I contribute to a 457 plan through my employer * I do not yet have an IRA for retirement but plan to set one up soon`,
    author: 'Thankyekindly',
    category: 'showerthoughts',
    voteScore: 7,
    deleted: false,
    commentCount: 0
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
    voteScore: -2,
    deleted: false,
    commentCount: 0
  },
  '1236ok3ym7mf1exrkjelp33lnez': {
    id: '1236ok3ym7mf1exrkjelp33lnez',
    timestamp: 1502467200000,
    title:
      'TIL of an Idahoan student who made a science project about the dangers of dihydrogen monoxide (water).',
    body:
      ' The project was so convincing it caused his fellow students to call for it to be banned. This was used as an argument against leading the public to false conclusions with the manipulation of facts.',
    author: 'biranouk',
    category: 'TIL',
    voteScore: 4,
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
