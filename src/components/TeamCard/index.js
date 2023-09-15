import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, imageUrl} = teamData

  return (
    <Link className="link-item" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img className="team-card-image" src={imageUrl} alt={`${name}`} />
        <p className="team-card-name"> {name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
