import './ProgressBarField.css';
import users from '../../../src/users.json';

function ProgressBarField() {
  console.log(users[0].strength);
  return (
    <div className="states-field">
      <p>Strength</p>
      <div className="state-box strength-box">
        <div className="stregth state"></div>
        <span className="userStrengthState">{users[0].strength}</span>
      </div>

      <p>Vitality</p>
      <div className="state-box vitality-box">
        <div className="vitality state"></div>
        <span className="userVitalityState">{users[0].vitality}</span>
      </div>

      <p>Intelligence</p>
      <div className="state-box intelligence-box">
        <div className="intelligence state"></div>
        <span className="userIntelligenceState">{users[0].intelligence}</span>
      </div>

      <p>Spiritual Power</p>
      <div className="state-box spiritual-power-box">
        <div className="spiritual-power state"></div>
        <span className="userSpiritualPowerState">
          {users[0].spiritualPower}
        </span>
      </div>
    </div>
  );
}

export default ProgressBarField;
