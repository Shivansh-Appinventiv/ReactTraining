import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import MovieHomeScreen from "./components/MovieHomeScreen";
import "./index.css";

const MovieTemplate = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenHome, setIsOpenHome] = useState(true);
  const [isOpenMovieScreen, setIsOpenMovieScreen] = useState(false);

  const changeToLoginScreen = (val) => {
    setIsOpenLogin(val);
    setIsOpenHome(false);
    setIsOpenSignUp(false);
  };

  const changeToSignUpScreen = (val) => {
    setIsOpenSignUp(val);
    setIsOpenHome(false);
    setIsOpenLogin(false);
  };

  const changeToMovieScreen = (val) => {
    setIsOpenMovieScreen(val);
    setIsOpenSignUp(false);
    setIsOpenHome(false);
    setIsOpenLogin(false);
  };

  return (
    <div className={`pageWrapper`}>
      <div className={`commonBox`}>
        {isOpenHome && (
          <HomeScreen
            handleLogin={(val) => changeToLoginScreen(val)}
            handleSignUp={(val) => changeToSignUpScreen(val)}
          />
        )}
        {isOpenLogin && (
          <LoginScreen handleMovieScreen={(val) => changeToMovieScreen(val)} />
        )}
        {isOpenSignUp && (
          <SignUpScreen handleLogin={(val) => changeToLoginScreen(val)} />
        )}
        {isOpenMovieScreen && <MovieHomeScreen />}
      </div>
    </div>
  );
};

export default MovieTemplate;
