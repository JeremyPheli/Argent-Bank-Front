import Banner from "../components/Banner";
import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";
import Item from "../components/Item";
import "../styles/main.css";

const Home = () => {
  return (
    <main>
      <Banner />
      <div className="container-main">
        <Item
          icon={iconChat}
          h2={"You are our #1 priority"}
          text={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <Item
          icon={iconMoney}
          h2={"More savings means higher rates"}
          text={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <Item
          icon={iconSecurity}
          h2={"Security you can trust"}
          text={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </div>
    </main>
  );
};

export default Home;
