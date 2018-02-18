const clone = require('clone')
const posts = require('./posts')

let db = {}

const defaultData = {
  '894tuq4ut84ut8v4t8wun89g': {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  },
  '8tu4bsun805n8un48ve89': {
    id: '8tu4bsun805n8un48ve89',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  },
  '123tuq4ut84ut8v4t8wun89g': {
    id: '123tuq4ut84ut8v4t8wun89g',
    parentId: '8xf0efefyjabvozdd253nd',
    timestamp: 1468166874634,
    body: 'What‘s WSU?',
    author: 'person',
    voteScore: 2,
    deleted: false,
    parentDeleted: false
  },
  '1234tuq4ut84ut8v4t8wun89g': {
    id: '1234tuq4ut84ut8v4t8wun89g',
    parentId: '1236ok3ym7mf1exrkjelp33lnez',
    timestamp: 1468166874634,
    body: 'I actually want an answer here guys',
    author: 'HowHasNoOneNoticed',
    voteScore: 2,
    deleted: false,
    parentDeleted: false
  },
  '1tuq4ut84ut8v4t8wun89g': {
    id: '1tuq4ut84ut8v4t8wun89g',
    parentId: '1236ok3ym7mf1exrkjelp33lnez',
    timestamp: 1468166874234,
    body: 'Checkmate, ya cunt!',
    author: 'Manareth',
    voteScore: 22,
    deleted: false,
    parentDeleted: false
  },
  '3tuq4ut84ut8v4t8wun89g': {
    id: '3tuq4ut84ut8v4t8wun89g',
    parentId: '1236ok3ym7mf1exrkjelp33lnez',
    timestamp: 1468166814614,
    body:
      'This chemical is heavy enough to be used as radiation shielding in nuclear reactors. Should it really be in our food?',
    author: 'ShadeauxMarie',
    voteScore: 1256,
    deleted: false,
    parentDeleted: false
  },
  '4tuq4ut84ut8v4t8wun89g': {
    id: '4tuq4ut84ut8v4t8wun89g',
    parentId: '1236ok3ym7mf1exrkjelp33lnez',
    timestamp: 1468166814614,
    body:
      'If a chemical can rust a lead pipe, imagine what it can do to your intestines.',
    author: 'MAtrix_v',
    voteScore: 443,
    deleted: false,
    parentDeleted: false
  }
}

function getData(token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByParent(token, parentId) {
  return new Promise(res => {
    let comments = getData(token)
    let keys = Object.keys(comments)
    filtered_keys = keys.filter(
      key => comments[key].parentId === parentId && !comments[key].deleted
    )
    res(filtered_keys.map(key => comments[key]))
  })
}

function get(token, id) {
  return new Promise(res => {
    const comments = getData(token)
    res(comments[id].deleted || comments[id].parentDeleted ? {} : comments[id])
  })
}

function add(token, comment) {
  return new Promise(res => {
    let comments = getData(token)

    comments[comment.id] = {
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    }

    posts.incrementCommentCounter(token, comment.parentId, 1)
    res(comments[comment.id])
  })
}

function vote(token, id, option) {
  return new Promise(res => {
    let comments = getData(token)
    comment = comments[id]
    switch (option) {
      case 'upVote':
        comment.voteScore = comment.voteScore + 1
        break
      case 'downVote':
        comment.voteScore = comment.voteScore - 1
        break
      default:
        console.log(`comments.vote received incorrect parameter: ${option}`)
    }
    res(comment)
  })
}

function disableByParent(token, post) {
  return new Promise(res => {
    let comments = getData(token)
    keys = Object.keys(comments)
    filtered_keys = keys.filter(key => comments[key].parentId === post.id)
    filtered_keys.forEach(key => (comments[key].parentDeleted = true))
    res(post)
  })
}

function disable(token, id) {
  return new Promise(res => {
    let comments = getData(token)
    comments[id].deleted = true
    posts.incrementCommentCounter(token, comments[id].parentId, -1)
    res(comments[id])
  })
}

function edit(token, id, comment) {
  return new Promise(res => {
    let comments = getData(token)
    for (prop in comment) {
      comments[id][prop] = comment[prop]
    }
    res(comments[id])
  })
}

module.exports = {
  get,
  getByParent,
  add,
  vote,
  disableByParent,
  disable,
  edit
}
