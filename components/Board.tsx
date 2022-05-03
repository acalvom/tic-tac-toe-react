import { Grid, Stack } from "@mui/material";
import * as React from "react";
import styles from "../styles/App.module.css";
import { Square } from "./Square";

export interface IBoardProps {}

export default function Board(props: IBoardProps) {
  return (
    <div className={styles.grid}>
      <Grid container>
        <Grid item lg={4}>
          <Stack>
            <Square />
            <Square />
            <Square />
          </Stack>
        </Grid>
        <Grid item lg={4}>
          <Stack>
            <Square />
            <Square />
            <Square />
          </Stack>
        </Grid>
        <Grid item lg={4}>
          <Stack>
            <Square />
            <Square />
            <Square />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
