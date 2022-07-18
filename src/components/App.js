import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
 
     

    hendleClick = evt => {
        const { name } = evt.target;
        this.setState(prevState => {
            return{
            [name] :   prevState[name]+1,
        }});
    };    


    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    };
    countPositiveFeedbackPercentage = (value) => {
         this.state.good > 0 ? value = (this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad)).toFixed(0) : value = '0';
        return value;
    };

    render() {
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;

        return (<>
            
           <Section title={'Please leave feedback'}> 
            
            <FeedbackOptions
                options={Object.keys(this.state)}
            onLeaveFeedback={this.hendleClick}
                />
            </Section>
            
            {good === 0 & neutral === 0 & bad === 0 ?

                <Notification message="There is no feedback"/>
                : <Section title={'Statistics'}>
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>}
            </>
           
        )
    }
}
  
      
  
     