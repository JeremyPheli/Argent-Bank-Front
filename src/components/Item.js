import "../styles/main.css";

const Item = ({ icon, h2, text }) => {
  return (
    <div className="container-item">
      <img src={icon} alt="image" className="container-img" />
      <div>
        <h2 className="container-h2">{h2}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Item;
