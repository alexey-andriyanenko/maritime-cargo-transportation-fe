import React from "react";
import { observer } from "mobx-react-lite";
import { List, ListItem, ListItemText } from "@mui/material";

import { IContainerShip } from "src/ships/models";

export interface IContainerShipDetailsProps {
  data: IContainerShip;
}

export const ContainerShipDetails = observer<IContainerShipDetailsProps>(({ data }) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Name" secondary={data.name} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Country" secondary={data.country.name} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Type" secondary={data.type.name} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Size" secondary={data.size.name} />
      </ListItem>
    </List>
  );
});
