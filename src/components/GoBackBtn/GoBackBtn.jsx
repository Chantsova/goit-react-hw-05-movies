import './GoBackBtn.css';

const GoBackBtn = ({ handleGoBack }) => {
  return (
    <div className="goBack">
      <button type="button" className="goBack__btn" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
};

export default GoBackBtn;
