import QuestList from "./components/QuestList";
import quests from "./quests.json";
import User from "./components/User";
import users from "./users.json";
import defaultImg from "./images/wizard_level_1.jpg"
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="top-side">
        {/* //////////////////////////  AVATAR  /////////////////////////// */}
       <User 
       avatarUrl={defaultImg} 
       userName={users[0].name} 
       rank={users[0].rank}
       level={users[0].level}
       strength={users[0].strength}
       vitality={users[0].vitality}
       intelligence={users[0].intelligence}
       spiritualPower={users[0].spiritualPower}
       />
        {/* //////////////////////////  QUESTS  /////////////////////////// */}
        <div className="quests__box">
          <p className="quests__box-title">Quests:</p>
          <div className="quests__field">
          <QuestList quests={quests} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;












        {/* <div className="avatar__box">
          <button className="avatar__button" type="button">
          </button>
          <div className="user__data">
            <p className="user__name">
              Name: <span className="user__data_span">Serhii</span>
            </p>
            <p className="user__rate">
              class: <span className="user__data_span">Wizard</span>
            </p>
            <p className="user__level">
              level <span className="user__data_span">1</span>
            </p>
          </div>
          <div className="user-states-box">
            <p>Strength</p>
            <div className="state-box">
              <div className="stregth state">15%</div>
            </div>

            <p>Vitality</p>
            <div className="state-box">
              <div className="vitality state">14%</div>
            </div>

            <p>Intelligence</p>
            <div className="state-box">
              <div className="intelligence state">16%</div>
            </div>

            <p>Spiritual power</p>
            <div className="state-box">
              <div className="spiritual-power state">0.5</div>
            </div>
          </div>
        </div> */}