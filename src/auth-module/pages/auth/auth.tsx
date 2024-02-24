import React from "react";
import { Container, Avatar, Box, Icon } from "@mui/material";

import { SignInForm } from "./sign-in-form";

const Auth: React.FC = () => {
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

        <SignInForm />
      </Box>
    </Container>
  );
};

export default Auth;
