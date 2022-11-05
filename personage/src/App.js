// import QuestList from './components/QuestList';
import QuestSection from 'components/QuestSection/QuestSection';
// import quests from './quests.json';
import User from './components/User/User';
import users from './users.json';
import ProgressBarField from 'components/ProgressBarField/ProgressBarField';
import defaultImg from './images/wizard_level_1.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="top-side">
        <div className="user__data">
          {/* //////////////////////////  USER  /////////////////////////// */}
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
          <ProgressBarField />
        </div>
        {/* //////////////////////////  QUESTS  /////////////////////////// */}
        <QuestSection />
      </div>
    </div>
  );
}

export default App;
