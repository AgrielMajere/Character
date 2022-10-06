import Quest from "./Quest";
import PropTypes from 'prop-types';

const QuestList = ({quests}) => {
   return( <ul>
        {quests.map((quest) => (
            <li key={quest.id}>
            <Quest
                quest_name={quest.name}
                count_of_repeats={quest.count_of_repeats}
                vitalityAdd={quest.vitalityAdd}
                strengthAdd={quest.strengthAdd}
                intelligenceAdd={quest.intelligenceAdd}
                spiritualPowerAdd={quest.spiritualPowerAdd}
                />    
            </li>
        ))}
    </ul>);
};

QuestList.propTypes = {
quests:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
})),
};

export default QuestList;