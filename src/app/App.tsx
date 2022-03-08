import React, { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppStore, UserStore } from "../store";
import { Header } from "../common";
import { ROUTES } from "../utils";

import "./App.css";

import { HomePage } from "../components";
import { PrivateRoute } from "../common/auth/private.route";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <AppStore>
        <Header />

        <UserStore>
          <Routes>
            <Route {...ROUTES.Home} element={<HomePage />} />

            <Route
              path="/not"
              element={
                <PrivateRoute roles={["fake"]}>
                  <HomePage />
                </PrivateRoute>
              }
            />

            {/** Fallback Redirect / Default Page */}
            <Route path="" element={<Navigate to={ROUTES.Home.path} />} />
          </Routes>
        </UserStore>
      </AppStore>
    </div>
  );
};
