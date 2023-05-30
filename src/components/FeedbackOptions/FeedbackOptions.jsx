import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button key={option} name={option} onClick={onLeaveFeedback}>{option}</button>
      )) 
      }
    </>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;