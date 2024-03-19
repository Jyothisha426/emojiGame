import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="each-emoji">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} className="emoji-styles" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
