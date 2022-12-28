import '../User/User.css';
import PropTypes from 'prop-types';

// class TempUser {
//   constructor() {
//     super();
//   }
//   userName;
//   userRank;
//   userLevel;
//   userStrength;
//   userVitality;
//   userIntelligence;
//   userSpiritualPower;

//   static updateUserData(params) {}
// }
// const mainUser = new TempUser('localhost');

const User = ({
  avatarUrl,
  name,
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
            Name: <span className="user__data_span">{name}</span>
          </p>
          <p className="user__rate">
            class: <span className="user__data_span">{rank}</span>
          </p>
          <p className="user__level">
            level <span className="user__data_span">{level}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  strength: PropTypes.number.isRequired,
  vitality: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  spiritualPower: PropTypes.number.isRequired,
};

export default User;
