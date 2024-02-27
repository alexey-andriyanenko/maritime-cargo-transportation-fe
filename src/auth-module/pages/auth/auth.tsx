import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Avatar, Box, Container, Icon } from "@mui/material";

import { useAuthStore } from "src/auth-module/store";
import { LoginForm } from "./login-form";
import { SessionForm } from "./session-form";
import { AuthEnum } from "./auth.types";

const Auth: React.FC = observer(() => {
  const authStore = useAuthStore();
  const [view, setView] = React.useState<AuthEnum>(AuthEnum.Login);

  useEffect(() => {
    if (!authStore.isLogged) return;
    setView(AuthEnum.Session);
  }, [authStore.isLogged]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <Icon className="material-symbols-outlined">lock</Icon>
        </Avatar>

        {view === AuthEnum.Login && <LoginForm />}
        {view === AuthEnum.Session && <SessionForm />}
      </Box>
    </Container>
  );
});

export default Auth;
