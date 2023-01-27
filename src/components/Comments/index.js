import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const newComments = [
  {
    id: '',

    isLiked: '',

    nameInput: 'nancharalu,bramaiah',

    commentInput: 'both brothers are best players in the lahul ground',

    date: '',
  },
]
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
console.log(initialContainerBackgroundClassNames[0])

class Comments extends Component {
  state = {commentsList: newComments, nameInput: '', commentInput: '', count: 0}

  likedButtons = id => {
    this.setState(prevState => ({
      commentsList: prevState.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isLiked: !eachContact.isLiked}
        }
        return eachContact
      }),
    }))
  }

  onClickButton = id => {
    const {commentsList} = this.state
    const filteredDetails = commentsList.filter(eachUser => eachUser.id !== id)
    this.setState({commentsList: filteredDetails})

    this.setState(prevState => ({count: prevState.count - 1}))
  }

  getRandomNumber = () =>
    Math.ceil(Math.random() * initialContainerBackgroundClassNames.length - 1)

  onAddComment = event => {
    event.preventDefault()

    this.setState(prevState => ({
      count: prevState.count + 1,
    }))

    const {nameInput, commentInput} = this.state

    const nameAndCommentDetails = {
      id: uuidv4(),

      nameInput,

      commentInput,

      date: formatDistanceToNow(new Date()),

      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, nameAndCommentDetails],

      nameInput: '',

      commentInput: '',
    }))
  }

  nameButton = event => {
    this.setState({nameInput: event.target.value})
  }

  commentButton = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput, commentsList, count} = this.state
    const randomNumber = this.getRandomNumber()
    console.log(randomNumber)

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Comments</h1>

          <form className="comments-container" onSubmit={this.onAddComment}>
            <div className="column">
              <p>Say something about 4.0 Technologies</p>

              <input
                className="name-image"
                value={nameInput}
                type="search"
                placeholder="name"
                onChange={this.nameButton}
              />

              <textarea
                className="comments"
                placeholder="Your Comment"
                value={commentInput}
                onChange={this.commentButton}
              />

              <button className="button" type="submit">
                Add Comment
              </button>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                className="image"
                alt="prop"
              />
            </div>
          </form>

          <hr className="separator" />

          <ul>
            <p className="counting">
              {count}
              <span className="comment">comments</span>
            </p>
            {commentsList.map(eachItem => (
              <CommentItem
                commentDetails={eachItem}
                key={eachItem.id}
                toggleIsLiked={this.likedButtons}
                Delete={this.onClickButton}
                random={initialContainerBackgroundClassNames[randomNumber]}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
