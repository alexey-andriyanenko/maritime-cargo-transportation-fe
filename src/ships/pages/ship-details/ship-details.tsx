import React, { useEffect } from "react";
import { useParams } from "react-router";
import { observer } from "mobx-react-lite";
import { Button, Grid, Typography } from "@mui/material";

import { PageContent } from "src/shared-module/components/layout";
import { ContainerShipDetails } from "./container-ship-details";
import { useStore } from "src/ships/store/ships";
import { IContainerShip } from "src/ships/models";

const ShipDetails: React.FC = observer(() => {
  const params = useParams<{ id: string }>();
  const shipsStore = useStore();

  useEffect(() => {
    shipsStore.loadDetails(Number(params.id));
  }, []);

  return (
    <PageContent>
      <Grid container direction="row" justifyContent="space-between">
        <Typography variant="h3"> Ship Details Page </Typography>
        <Button variant="contained" data-testid="home-page-button">
          Button
        </Button>
      </Grid>

      {shipsStore.details ? (
        <ContainerShipDetails data={shipsStore.details as IContainerShip} />
      ) : null}
    </PageContent>
  );
});

export default ShipDetails;
