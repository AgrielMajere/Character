import '../QuestSection/QuestSection.css';
import QuestList from '../../components/QuestList';
import quests from '../../quests.json';
// import PropTypes from 'prop-types';

function QuestSection(props) {
  return (
    <div className="quests__box">
      <p className="quests__box-title">Quests:</p>
      <div className="quests__field">
        <QuestList quests={quests} />
      </div>
      <div className="finished-quests__info-box">
        <span className="finished-quests__title">Finished Quests</span>
      </div>
    </div>
  );
}

export default QuestSection;
