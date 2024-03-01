import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Grid, Typography } from "@mui/material";

import { PageContent } from "src/shared-module/components/layout";
import { ShipsList } from "./ships-list";

const Ships: React.FC = observer(() => {
  return (
    <PageContent>
      <Grid container direction="row" justifyContent="space-between">
        <Typography variant="h3"> Ships Page </Typography>
        <Button variant="contained" data-testid="home-page-button">
          Button
        </Button>
      </Grid>

      <ShipsList />
    </PageContent>
  );
});

export default Ships;
