import React, { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Admin } from "./layouts/Admin";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
