import banner from "../assets/img/bank-tree.jpeg";
import "../styles/main.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="banner" className="banner-img" />
      <div className="banner-text">
        <div className="banner-text-bold">
          <p>No Fees.</p>
          <p>No Minimum Deposit.</p>
          <p>High interest rates.</p>
        </div>
        <p>Open a savings account with Argent Bank today!</p>
      </div>
    </div>
  );
};

export default Banner;
