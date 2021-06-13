import "./index.css";

const HomeScreen = (props) => {
  const handleLogin = () => {
    props.handleLogin(true);
  };

  const handleSignUp = () => {
    props.handleSignUp(true);
  };

  return (
    <div className={`homeContainer`}>
      <div className={`homeArea`}>
        <div className={`btnContainer`}>
          <button
            type={`button`}
            onClick={() => handleLogin()}
          >{`LOG IN`}</button>
        </div>
        <div className={`imageContainer`}>
          <h1>Home Screen</h1>
          <img
            src={`https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png`}
            alt={`reactImage`}
            width={`100%%`}
          />
        </div>
        <div className={`btnContainer`}>
          <button
            type={`button`}
            onClick={() => handleSignUp()}
          >{`SIGN UP`}</button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
