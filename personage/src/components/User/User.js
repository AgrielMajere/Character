import PropTypes from 'prop-types';

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
      <div className="user__data">
        <img
          className="avatar__img"
          src="https://i.ibb.co/vzzwmcj/wizard-level-1.jpg"
          alt="Avatar"
        />
        <div className="user__info-box">
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
      </div>
      <div className="user-states-box"></div>
    </div>
  );
};

User.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  strength: PropTypes.number.isRequired,
  vitality: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  spiritualPower: PropTypes.number.isRequired,
};

export default User;
