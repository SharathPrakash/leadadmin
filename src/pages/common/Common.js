import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

export default function Common() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Common" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget title="Common Details" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h3" className={classes.text}>
                Common  Details will be displayed
                </Typography>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
