import React, { useEffect } from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TablePagination,
  IconButton,
  Icon,
} from "@mui/material";
import { observer } from "mobx-react-lite";

import { TableSkeleton } from "src/shared-module/components/ui";
import { useStore } from "src/ships/store/ships";

import { columns } from "./ships-list.constants";
import { ShipsListContainer } from "./ships-list.style";

export const ShipsList = observer(() => {
  const shipsStore = useStore();

  useEffect(() => {
    shipsStore.loadShips();
  }, []);

  return (
    <ShipsListContainer data-testid="departments-table">
      {shipsStore.isLoading ? (
        <TableSkeleton columns={shipsStore.ships.length} data-testid="departments-table-skeleton" />
      ) : (
        <Table data-testid="departments-table-content">
          <TableHead>
            <TableRow>
              {columns.map((title) => (
                <TableCell key={title}> {title} </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {shipsStore.ships.map((ship) => (
              <TableRow key={`ship-${ship.id}`} data-testid={`ship-${ship.id}`}>
                <TableCell> {ship.id} </TableCell>
                <TableCell> {ship.name} </TableCell>
                <TableCell> {ship.country.name} </TableCell>
                <TableCell> {ship.type.name} </TableCell>
                <TableCell>
                  <IconButton data-testid="edit-btn">
                    <Icon className="material-symbols-outlined">edit</Icon>
                  </IconButton>
                  <IconButton data-testid="delete-btn">
                    <Icon className="material-symbols-outlined">delete</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <TablePagination
        count={shipsStore.totalCount}
        page={shipsStore.filters.page - 1}
        rowsPerPage={shipsStore.filters.limit}
        onPageChange={() => null}
        onRowsPerPageChange={() => null}
      />
    </ShipsListContainer>
  );
});
