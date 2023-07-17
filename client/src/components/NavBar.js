import React from "react";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../const/routeKeys";
import { makeIsAuth } from "../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { setAuth, setUser } from "../store/actions";

const NavBar = () => {
  const isAuth = useSelector(makeIsAuth());
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogIn = () => history.push(LOGIN_ROUTE);
  const onAdmin = () => history.push(ADMIN_ROUTE);
  const onLogout = () => {
    history.push(LOGIN_ROUTE);
    dispatch(setAuth(false));
    dispatch(setUser({}));
  };
  const onBasket = () => history.push(BASKET_ROUTE);

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to={SHOP_ROUTE}>
          Купи Девайс
        </NavLink>
        {isAuth ? (
          <Nav className='ml-auto' style={{ color: "white" }}>
            <Button variant={"outline-light"} onClick={onAdmin}>
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              className='ml-2'
              onClick={onLogout}>
              Выйти
            </Button>
            <Button
              variant={"outline-light"}
              className='ml-2'
              onClick={onBasket}>
              Корзина
            </Button>
          </Nav>
        ) : (
          <Nav className='ml-auto' style={{ color: "white" }}>
            <Button variant='outline-light' onClick={onLogIn}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
