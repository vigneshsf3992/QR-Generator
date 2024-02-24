import PropTypes from 'prop-types';
import {userData} from './data'
// import './card.css'

function User(props) {
  return <div className="card-container">
    <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
    <img src={props.profile} className="img" alt="user" />
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.desc}</p>

    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary outline">Follow</button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        {props.skills.map((skill,index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>

  </div>
}
const UserCard = () => {
  return (
      <>
        {userData.map((user,index) => (
          <User key={index} name={user.name} city={user.city} desc={user.desc} skills={user.skills} online={user.online} profile={user.profile}/>
        ))}
      </>
  )
}

export default UserCard


User.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  desc: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  online: PropTypes.bool,
  profile: PropTypes.string
};

{/* <User name="James" city="New York" desc="Front-end developer" skills={["HTML", "CSS", "JS", "Angular", "React"]} online={true} profile="images/1.jpg"/> */}
