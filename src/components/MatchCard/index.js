import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchData

  return (
    <li className={`match-card ${matchStatus}`}>
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p className="match-card-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className="match-card-name">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
