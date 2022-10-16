import '../Quest/Quest.css';
import PropTypes from 'prop-types';
const Quest = ({
  quest_name,
  count_of_repeats,
  vitalityAdd,
  strengthAdd,
  intelligenceAdd,
  spiritualPowerAdd,
}) => {
  return (
    <div className="one-quest-box">
      <p className="one-quest__title">
        {quest_name}: {count_of_repeats}
      </p>
      <div className="quests__states-box">
        <p className="states-add-count">
          {vitalityAdd > 0 && 'Vitality +'}
          <span>{vitalityAdd > 0 && vitalityAdd}</span>
        </p>
        <p className="states-add-count">
          {strengthAdd > 0 && 'Strength +'}
          <span>{strengthAdd > 0 && strengthAdd}</span>
        </p>
        <p className="states-add-count">
          {intelligenceAdd > 0 && 'Intelligence +'}
          <span>{intelligenceAdd > 0 && intelligenceAdd}</span>
        </p>
        <p className="states-add-count">
          {spiritualPowerAdd > 0 && 'Spiritual power +'}
          <span>{spiritualPowerAdd > 0 && spiritualPowerAdd}</span>
        </p>
      </div>
      <button className="one-quest__done-button" type="button">
        Done
      </button>
    </div>
  );
};

Quest.propTypes = {
  quest_name: PropTypes.string.isRequired,
  count_of_repeats: PropTypes.string.isRequired,
  vitalityAdd: PropTypes.number.isRequired,
  strengthAdd: PropTypes.number.isRequired,
  intelligenceAdd: PropTypes.number.isRequired,
  spiritualPowerAdd: PropTypes.number.isRequired,
};

export default Quest;
