import './index.css'

const NavBar = props => {
  const {imgUrl, alt, currentScore, isGameGoingOn, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={imgUrl} alt={alt} className="emoji-logo" />
        <h1 className="navbar-head">Emoji Game</h1>
      </div>

      {isGameGoingOn && (
        <div className="scores-container">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
