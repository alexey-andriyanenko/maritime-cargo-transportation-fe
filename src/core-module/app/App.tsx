import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import { useAuthStore } from "src/auth-module/store";

import CoreModule from "../index";
import AuthModule from "src/auth-module";

import { Navigator } from "../navigator";
import { AppRoutes } from "../routes";

export const App = observer(() => {
  const theme = createTheme();
  const authStore = useAuthStore();

  useEffect(() => {
    authStore.checkSession();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navigator />
        <AppRoutes routes={CoreModule.routes} />
        <AppRoutes routes={AuthModule.routes} />
      </BrowserRouter>
    </ThemeProvider>
  );
});
