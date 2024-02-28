import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Grid, Typography } from "@mui/material";

import { PageContent } from "src/shared-module/components/layout";

const Home: React.FC = observer(() => {
  return (
    <PageContent>
      <Grid container direction="row" justifyContent="space-between">
        <Typography variant="h3"> Home Page </Typography>
        <Button variant="contained" data-testid="home-page-button">
          Button
        </Button>
      </Grid>
    </PageContent>
  );
});

export default Home;
