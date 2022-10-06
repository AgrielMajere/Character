import Quest from "./components/Quest";
import quests from "./quests.json";
import "./App.css";

export default function App2() {
    return (
    <div>
        {quests.map(quest => <Quest
        quest_name={quest.name}
        count_of_repeats={quest.count_of_repeats}
        vitalityAdd={quest.vitalityAdd}
        strengthAdd={quest.strengthAdd}
        intelligenceAdd={quest.intelligenceAdd}
        spiritualPowerAdd={quest.spiritualPowerAdd}
        />)}
    </div>);
}