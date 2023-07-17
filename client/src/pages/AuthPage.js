import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../const/routeKeys";
import { Container, Button, Card, Form, Row } from "react-bootstrap";
import { registration, login } from "../http/userApi";
import { setAuth, setNotification, setUser } from "../store/actions/index";
import { useDispatch } from "react-redux";
import useDocumentTitle from "../hooks/useDocumentTitle";

const AuthPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputData;

  const onChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    setInputData({ ...inputData, [inputName]: inputValue });
  };

  const onSubmit = async (event, isLogin) => {
    event.preventDefault();

    if (email === "" || password === "") {
      dispatch(
        setNotification({ title: "info", description: "Bad input data" })
      );

      setInputData({
        email: "",
        password: "",
      }); //clear input values

      return null;
    }

    let user;
    try {
      if (isLogin) {
        user = await login(email, password);
        dispatch(
          setNotification({
            title: "info",
            description: "Вы успешно залогинились",
          })
        );
      } else {
        user = await registration(email, password);
        dispatch(
          setNotification({
            title: "info",
            description: "Вы успешно зарегистрировались",
          })
        );
      }

      dispatch(setUser(user));
      dispatch(setAuth(true));
      history.push(SHOP_ROUTE);
    } catch (e) {
      console.log("ON AUTH SUBMIT");
      console.log(e);
      dispatch(
        setNotification({
          title: "info",
          description: e.response?.data?.message,
        })
      );
    }

    setInputData({
      email: "",
      password: "",
    }); //clear input values
  };

  useDocumentTitle("Авторизация");

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: "600px" }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form
          className='d-flex flex-column'
          onSubmit={e => onSubmit(e, isLogin)}>
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш емейл...'
            name='email'
            type='email'
            value={email}
            onChange={onChange}
          />
          <Form.Control
            className='mt-3'
            name='password'
            type='password'
            placeholder='Введите ваш пароль...'
            value={password}
            onChange={onChange}
          />
          <Row className='d-flex justify-content-between mt-3 pe-3 ps-3'>
            {isLogin ? (
              <div className='w-auto'>
                Нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div className='w-auto'>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button
              style={{ width: "auto" }}
              variant={"outline-success"}
              type='submit'>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthPage;
