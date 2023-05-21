export const Statistic = function (props) {
  const {
    good,
    neutral,
    bad,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = props;
  console.log(props);
  if (!(good ?? neutral ?? bad)) {
    return;
  } else {
    return (
      <div>
        <h2>Feedback</h2>
        <p>GOOD : {good}</p>

        <p>Neutral : {neutral}</p>

        <p>BAD : {bad}</p>

        <p>TOTAL : {countTotalFeedback}</p>
        <p>POSITIV FEEDBACK : {countPositiveFeedbackPercentage} %</p>
      </div>
    );
  }
};
