import PropTypes from 'prop-types';
import ProgressBarField from './ProgressBarField';

const User = ({
  avatarUrl,
  userName,
  rank,
  level,
  strength,
  vitality,
  intelligence,
  spiritualPower,
}) => {
  return (
    <div className="avatar__box">
    <button className="avatar__button" type="button">
    <img className="avatar__img" src={avatarUrl} alt="Avatar"/>
    </button>
    <div className="user__data">
      <p className="user__name">
        Name: <span className="user__data_span">{userName}</span>
      </p>
      <p className="user__rate">
        class: <span className="user__data_span">{rank}</span>
      </p>
      <p className="user__level">
        level <span className="user__data_span">{level}</span>
      </p>
    </div>
    <div className="user-states-box">
    <ProgressBarField/>





      {/* <p>Strength</p>
      <div className="state-box">
        <div className="stregth state">{strength}</div>
      </div>

      <p>Vitality</p>
      <div className="state-box">
        <div className="vitality state">{vitality}</div>
      </div>

      <p>Intelligence</p>
      <div className="state-box">
        <div className="intelligence state">{intelligence}</div>
      </div>

      <p>Spiritual power</p>
      <div className="state-box">
      <div className="spiritual-power state">{spiritualPower}</div>
      </div> */}
    </div>
  </div>
  );
};

User.propTypes = {
      avatarUrl: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      rank: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      strength:PropTypes.number.isRequired,
      vitality:PropTypes.number.isRequired,
      intelligence:PropTypes.number.isRequired,
      spiritualPower:PropTypes.number.isRequired,
 };

export default User;