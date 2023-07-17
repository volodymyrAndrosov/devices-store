import React from "react";
import { Switch, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes/routes";
import NotFoundPage from "../pages/NotFoundPage";
import { useSelector } from "react-redux";
import { makeIsAuth } from "../store/selectors/index";

const AppRouter = () => {
  const isAuth = useSelector(makeIsAuth());

  return (
    <Switch>
      {isAuth &&
        authRoutes.map((value, index) => {
          const { path, Component } = value;

          return <Route key={index} path={path} component={Component} exact />;
        })}
      {publicRoutes.map((value, index) => {
        const { path, Component } = value;

        return <Route key={index} path={path} component={Component} exact />;
      })}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default AppRouter;
