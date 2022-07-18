import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const hendleClick = evt => {
        const { name } = evt.target;
        switch (name) {
            case 'good': setGood(prevState => prevState + 1);
                break;
            case 'bad': setBad(prevState => prevState + 1);
                break;
            case 'neutral': setNeutral(prevState => prevState + 1);
                break;
            default: return;
        }
    };

    const countTotalFeedback = () => {
        const total = good + neutral + bad;
        return total;
    };

    const countPositiveFeedbackPercentage = (value) => {
        good > 0 ? value = (good * 100 / (good + neutral + bad)).toFixed(0) : value = '0';
        return value;
    };
    
    return (<>
            
        <Section title={'Please leave feedback'}>
            
            <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={hendleClick}
            />
        </Section>
            
        {good === 0 & neutral === 0 & bad === 0 ?

            <Notification message="There is no feedback" />
            : <Section title={'Statistics'}>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />
            </Section>}
    </>
           
    )
};
     