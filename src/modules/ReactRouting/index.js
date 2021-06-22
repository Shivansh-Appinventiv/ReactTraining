import { Box, Button, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import ProductDetail from "./pages/ProductDetail";
import Modal from "./components/Modal";
import LoginForm from "./pages/LoginForm";
import "./index.css";

export default function ReactRouting() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);

  return (
    <div className={`screenArea`}>
      <Router>
        {!window.localStorage.getItem("accessToken") ? (
          console.log("accessToken")
        ) : (
          <Redirect to="/dashboard" />
        )}
        <Box className={`headerWrapper`}>
          <Toolbar>
            <Box className={`sectionContainer`}>
              <Box className={`headerArea`}>
                <Box className={`logoArea`}>
                  <img
                    src={`https://media.glassdoor.com/sqll/1032313/appinventiv-squarelogo-1592410336805.png`}
                    alt={`appInventivLogo`}
                    height={`40px`}
                    width={`40px`}
                  />
                  <span>{`AppInventivMall`}</span>
                </Box>
                <Box className={`headerButtonArea`}>
                  {isLogIn && !window.localStorage.getItem("accessToken") ? (
                    <Box className={`buttonWrapper`}>
                      <Button
                        variant={`outlined`}
                        color={`primary`}
                        onClick={() => setIsOpen(true)}
                      >{`LOGIN`}</Button>
                    </Box>
                  ) : (
                    <Box className={`buttonWrapper`}>
                      <Link to={`/`} className={`linkText`}>
                        <Button
                          variant={`outlined`}
                          color={`secondary`}
                          onClick={() => {
                            window.localStorage.removeItem("accessToken");
                            setIsLogIn(true);
                          }}
                        >{`LOGOUT`}</Button>
                      </Link>
                    </Box>
                  )}
                </Box>
              </Box>
              <Modal isOpen={isOpen} title={`Login Form`} setIsOpen={setIsOpen}>
                <LoginForm
                  linkRef={`/dashboard`}
                  setIsOpen={setIsOpen}
                  setIsLogIn={setIsLogIn}
                />
              </Modal>
            </Box>
          </Toolbar>
        </Box>
        <Switch>
          <Route path="/dashboard/:id" component={ProductDetail} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}
