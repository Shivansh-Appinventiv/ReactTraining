import { Box, Button, Toolbar } from "@material-ui/core";
import React, { useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import ProductDetail from "./pages/ProductDetail";
import Modal from "./components/Modal";
import LoginForm from "./pages/LoginForm";
import UserDashboard from "./pages/UserDashboard";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import "./index.css";

export default function ReactRouting() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogIn, setIsLogIn] = useState(
    true && !window.localStorage.getItem("accessToken")
  );

  return (
    <div className={`screenArea`}>
      <Router>
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
                {isLogIn && !window.localStorage.getItem("accessToken") ? (
                  <></>
                ) : (
                  <Box>
                    <NavLink
                      to={`/dashboard`}
                      className={`navLinks`}
                    >{`DashBoard`}</NavLink>
                    <NavLink
                      to={`/users`}
                      className={`navLinks`}
                    >{`UsersDashBoard`}</NavLink>
                  </Box>
                )}
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
                <LoginForm setIsOpen={setIsOpen} setIsLogIn={setIsLogIn} />
              </Modal>
            </Box>
          </Toolbar>
        </Box>
        <Switch>
          <Route path={`/users/:id`} component={UserDetail} />
          <Route path={`/users`} component={UserDashboard} />
          <Route path="/dashboard/:id" component={ProductDetail} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
