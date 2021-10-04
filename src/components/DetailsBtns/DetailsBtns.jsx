import './DetailsBtns.css';

const DetailsBtns = ({ text }) => {
  return (
    <div className="details">
      <button className="details__btn" type="button">
        {text}
      </button>
    </div>
  );
};

export default DetailsBtns;
