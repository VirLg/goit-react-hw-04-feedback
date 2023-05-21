import React from 'react';
import { useState } from 'react';
import { Section } from './components/section/Section';
import { Statistic } from './components/Statistic/Statistic';
import { FeedbackOptions } from './components/feedbackOptions/FeedbackOptions';

const App = () => {
  // *useState
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // *useState
  // state={
  //     good:0,
  //     neutral:0,
  //     bad:0,
  // }

  const handleGood = () => {
    return setGood(prevState => prevState + 1);
    // this.setState((prevState)=>{
    // return{
    //     good:prevState.good+1
    //     }
    // });
  };

  const handleNature = () => setNeutral(prevState => prevState + 1);

  const handleBad = () => setBad(prevState => (prevState = prevState + 1));

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <>
      <Section>
        <FeedbackOptions
          handleGood={handleGood}
          handleNature={handleNature}
          handleBad={handleBad}
        />
      </Section>

      <Section>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback()}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default App;
