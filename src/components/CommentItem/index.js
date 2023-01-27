import './index.css'

const CommentItem = props => {
  const {commentDetails, random, Delete, toggleIsLiked} = props

  const {nameInput, commentInput, date, id, isLiked} = commentDetails

  const isLike = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const first = isLiked ? 'color1' : 'color2'

  const deleteButton = () => {
    Delete(id)
  }

  const LikeButton = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="list-container">
      <div className="container1">
        <h1 className={`${random}`}>{nameInput[0]}</h1>
        <h1 className="head">{nameInput}</h1>
        <p className="para">{date}</p>
      </div>

      <div className="container2">
        <p className="comment-section">{commentInput}</p>
      </div>

      <div className="like-container">
        <div className="container5">
          <img src={isLike} className="like" alt="prop" />

          <button
            type="button"
            className={`buttonfirst ${first}`}
            onClick={LikeButton}
          >
            like
          </button>
        </div>

        <div>
          <button className="button1" type="button" onClick={deleteButton}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-button"
            />
          </button>
        </div>
      </div>

      <hr className="separator1" />
    </li>
  )
}

export default CommentItem
