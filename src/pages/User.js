import "../styles/main.css";

const Transcations = ({ title, value, label }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "70%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "26px 18px",
        background: "white",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <p style={{ fontSize: "12px", margin: 0, alignSelf: "flex-start" }}>
          {title}
        </p>
        <p
          style={{
            alignSelf: "flex-start",
            margin: 0,
            fontWeight: "bold",
            fontSize: "26px",
          }}
        >
          $ {value}
        </p>
        <p style={{ fontSize: "12px", margin: 0, alignSelf: "flex-start" }}>
          {label}
        </p>
      </div>
      <button className="transaction-button">View Transactions</button>
    </div>
  );
};

const User = () => {
  return (
    <div className="container-user">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <h3 style={{ fontSize: 22 }}>Welcome back</h3>
        <div
          style={{
            display: "flex",
            gap: "12px",
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input className="input-name" placeholder="Tony" />
          <input className="input-name" placeholder="Jarvis" />
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="btn-actions">Save</button>
          <button className="btn-actions">Cancel</button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            margin: "40px 0 80px 0",
          }}
        >
          <Transcations
            title={"Argent Bank Checking"}
            value={"2,082.79"}
            label={"Available Balance"}
          />
          <Transcations
            title={"Argent Bank Savings"}
            value={"10,928.42"}
            label={"Available Balance"}
          />
          <Transcations
            title={"Argent Bank Credit Card"}
            value={"184.30"}
            label={"Current Balance"}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
