// Write your React code here.
import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onClickEmoji = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderFeedbackCard = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback">
        <h1 className="feedback-header">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="list-items">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                type="button"
                onClick={this.onClickEmoji}
                className="emoji-btn"
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <br />
                <span className="name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  renderThankYouCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyou-card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-symbol" />
        <h1>Thank You!</h1>
        <p className="feedback-des">
          We will use our feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {isFeedbackGiven
            ? this.renderThankYouCard()
            : this.renderFeedbackCard()}
        </div>
      </div>
    )
  }
}

export default Feedback
