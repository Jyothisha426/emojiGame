import './index.css'

const wonUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const lostUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? wonUrl : lostUrl
  const gameResult = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="score-result-container">
      <div className="second-container">
        <h1 className="head">{gameResult}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="scored">{score}/12</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard
