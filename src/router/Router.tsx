import React, { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../components/pages/Login";
import Page404 from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";

// eslint-disable-next-line react/display-name
const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});

export default Router;
