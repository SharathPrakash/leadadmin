import React from "react";
import { Grid } from "@material-ui/core";

import MUIDataTable from "mui-datatables";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";


import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Table from "../dashboard/components/Table/Table";

import mock from "../dashboard/mock";



const useStyles1 = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const datatableData = [
  ["Lead ID","469569"],
["Email","baniksenXXXXXXX@gmail.com"],
["Mobile","8981622732"],
["Age","42"],
["Marital Status","Married"],
["Address","Door No, 31 A/2,Khengrapatti,,west bengal kolkatta, ,na - Khengrapatti,Kolkata"],
["City","Kolkata"],
["Language","Hindi"],
["Education","Under Graduation"],
["Occupation","Business Person"],
["Income","3 to 3.5 Lakhs"],
["What is your Residence Type?","Owned"],
["Do you own a Car?","No"],
["Do you have PAN Card?","Yes"],
["Do you have ITR and if yes how many years?","Yes and 3 years"],
];



export default function NewLeads() {
  var classes = useStyles();
  const classes1 = useStyles1();
  const classes2 = useStyles2();

  return (
    <>
      <PageTitle title="NewLeads" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget title="New Lead Details" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h3" className={classes.text}>


                <div className={classes1.root}>

                  <form className={classes2.root} noValidate autoComplete="off">

                    <TextField
                      id="filled-read-only-input"
                      label="Name"
                      defaultValue="Bappi Sen"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                    <TextField
                      id="filled-read-only-input"
                      label="Purchased Date"
                      defaultValue="May 11, 2018 4:50 PM "
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />

                    <TextField
                      id="filled-read-only-input"
                      label="Follow Up Date"
                      defaultValue="Nov 28, 2019 12:00 AM"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />


                  </form>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes1.heading}>Lead Details</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.

                        <Grid item xs={12}>
                          <MUIDataTable
                            title="Employee List"
                            data={datatableData}
                            columns={["Name", "Details"]}
                          />
                        </Grid>

                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography className={classes1.heading}>Expansion Panel 2</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel disabled>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography className={classes1.heading}>Disabled Expansion Panel</Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                </div>





              </Typography>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
